const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const postCollection = client.db('startup').collection('posts');

async function getUser(username) {
     // await postCollection.deleteMany({})
    return await userCollection.findOne({ username: username })
}

async function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(username, email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        email: email,
        password: passwordHash,
        token: uuid.v4(),
        posts: []
    };
    await userCollection.insertOne(user);
    log(user)
    return user;
}

async function updateUser(user) {
    await userCollection.findOneAndReplace({ username: user.username }, user);
}

async function updatePost(post) {
    await postCollection.deleteOne({ postId: post.postId }, post);
    await postCollection.insertOne(post);
}


async function addPost(post) {
    post.postId = uuid.v4();
    await postCollection.insertOne(post);
    return post.postId
}

function getPosts() {
    const query = {};
    const options = {
        sort: { date: -1 },
        limit: 25,
    };
    const cursor = postCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addPost,
    getPosts,
    updateUser,
    updatePost
};

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};