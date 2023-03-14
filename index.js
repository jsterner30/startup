const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const cors = require('cors');


const authCookieName = 'token';

try {
// The service port may be set on the command line
    const port = process.argv.length > 2 ? process.argv[2] : 4000;

    app.use(cors());

// JSON body parsing using built-in middleware
    app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
    app.use(cookieParser());

// Serve up the applications static content
    app.use(express.static('public'));

// Router for service endpoints
    var apiRouter = express.Router();
    app.use(`/api`, apiRouter);

    apiRouter.get('/health', (req, res) => {
        console.log('ttttt')
        return res.status(200).send({ msg: 'OK' });
    });

// CreateAuth token for a new user
    apiRouter.post('/auth/create', async (req, res) => {
        log(req.body)
        if (await DB.getUser(req.body.username)) {
            res.status(409).send({ msg: 'Existing user' });
        } else {
            const user = await DB.createUser(req.body.username, req.body.email, req.body.password);

            // Set the cookie
            setAuthCookie(res, user.token);

            res.status(200).send({
                id: user._id,
            });
        }
    });

// GetAuth token for the provided credentials
    apiRouter.post('/auth/login', async (req, res) => {
        log(req.body)
        const user = await DB.getUser(req.body.username);
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                setAuthCookie(res, user.token);
                res.send({ id: user._id });
                return;
            }
            else {
                res.status(401).send({ msg: 'Invalid Password' });
            }
        }
        res.status(404).send({ msg: 'Username not found' });
    });

// DeleteAuth token if stored in cookie
    apiRouter.delete('/auth/logout', (_req, res) => {
        res.clearCookie(authCookieName);
        res.status(204).end();
    });

// GetUser returns information about a user
    apiRouter.get('/user/:username', async (req, res) => {
        const user = await DB.getUser(req.params.username);
        if (user) {
            const token = req?.cookies.token;
            res.send({ username: user.username, authenticated: token === user.token });
            return;
        }
        res.status(404).send({ msg: 'Unknown' });
    });

// secureApiRouter verifies credentials for endpoints
    var secureApiRouter = express.Router();
    apiRouter.use(secureApiRouter);

    secureApiRouter.use(async (req, res, next) => {
        log('in auth')
        log(req.cookies)
        log(req.cookies.token)
        authToken = req.cookies[authCookieName];
        const user = await DB.getUserByToken(authToken);
        if (user) {
            next();
        } else {
            res.status(401).send({ msg: 'Unauthorized' });
        }
    });

// GetPosts
    secureApiRouter.get('/posts', async (req, res) => {
        log("in route")
        const posts = await DB.getPosts();
        res.send(posts);
    });

// Add post
    secureApiRouter.post('/post', async (req, res) => {
        const postId = await DB.addPost(req.body);
        res.status(200).send({
            postId
        });
    });

    // Add post to user
    secureApiRouter.post('/user/posts', async (req, res) => {
        const user = await DB.getUser(req.body.username);
        if (!user) res.status(500).send();
        user.posts.push(req.body.postId);
        await DB.updateUser(user);
        res.status(200).send();
    });

    // Add post to user
    secureApiRouter.put('/post', async (req, res) => {
        await DB.updatePost(req.body);
        // const c = await DB.getPosts();
        res.status(200).send();
    });

// Default error handler
    app.use(function (err, req, res, next) {
        res.status(500).send({ type: err.name, message: err.message });
    });

// Return the application's default page if the path is unknown
    app.use((_req, res) => {
        res.sendFile('index.html', { root: 'public' });
    });

// setAuthCookie in the HTTP response
    function setAuthCookie(res, authToken) {
        log('in set cookie')
        log(authToken)
        res.cookie(authCookieName, authToken, {
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
        });
    }

    app.listen(port, () => {
        log(`Listening on port ${port}`);
    });
} catch (err) {
    log(err);
}
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
