
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    function login () {
        const usernameEl = document.querySelector("#loginUsername");
        const passwordEl = document.querySelector("#loginPassword");
        const warnEl = document.querySelector("#loginWarning");
        localStorage.setItem("userName", usernameEl.value);
        let users = localStorage.getItem("users");
        if (!users) {
            localStorage.setItem("users", "{}");
            users = "{}";
        }
        users = JSON.parse(users);

        if (usernameEl.value === "" || passwordEl.value === "") {
            warnEl.textContent = "Please fill in all fields";
        }
        else if (!users[usernameEl.value]) {
            if (!document.querySelector("#loginRegisterButton")) {
                const regBtnDiv = document.querySelector("#registerLoginButtonDiv");
                const regBtn = document.createElement("button");
                regBtn.textContent = "Sign Up Instead";
                regBtn.id = "loginRegisterButton";
                regBtn.style.paddingInline = "10%";
                regBtn.classList.add("btn-primary");
                regBtn.classList.add("btn-large");
                regBtn.onclick = () => {
                    window.location.href = "create.html";
                };
                regBtnDiv.appendChild(regBtn);
            }
            warnEl.textContent = "Username not found";
        } else if (users[usernameEl.value].password === passwordEl.value) {
            load();
            window.location.href = "feed.html";
        }
        else {
            warnEl.textContent = "Incorrect password";
            const loginRegBtn = document.querySelector("#loginRegisterButton");
            if (loginRegBtn) {
                loginRegBtn.remove();
            }
        }
    }

    function create () {
        const usernameEl = document.querySelector("#registerUsername");
        const passwordEl = document.querySelector("#registerPassword");
        const emailEl = document.querySelector("#registerEmail");
        const confirmEl = document.querySelector("#registerConfirm");
        const warnEl = document.querySelector("#registerWarning");
        localStorage.setItem("userName", usernameEl.value);
        let users = localStorage.getItem("users");
        if (!users) {
            localStorage.setItem("users", "{}");
            users = "{}";
        }
        users = JSON.parse(users);
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (usernameEl.value === "" || passwordEl.value === "" || emailEl.value === "" || confirmEl.value === "") {
            warnEl.textContent = "Please fill out all fields";
        }
        else if (!regex.test(emailEl.value)) {
            warnEl.textContent = "Invalid Email Format";
            const loginRegBtn = document.querySelector("#registerLoginButton");
            if (loginRegBtn) {
                loginRegBtn.remove();
            }
        }

        else if(passwordEl.value.length < 8) {
            warnEl.textContent = "Password must be at least 8 characters";
            const loginRegBtn = document.querySelector("#loginRegisterButton");
            if (loginRegBtn) {
                loginRegBtn.remove();
            }
        }

        else if (passwordEl.value !== confirmEl.value) {
            warnEl.textContent = "Passwords do not match";
            const loginRegBtn = document.querySelector("#loginRegisterButton");
            if (loginRegBtn) {
                loginRegBtn.remove();
            }
        }

        else if (users[usernameEl.value]) {
            if (!document.querySelector("#registerLoginButton")) {
                const regBtnDiv = document.querySelector("#registerButtonDiv");
                const regBtn = document.createElement("button");
                regBtn.textContent = "Login Instead";
                regBtn.id = "registerLoginButton";
                regBtn.style.paddingInline = "10%";
                regBtn.style.paddingTop = "15px";
                regBtn.classList.add("btn-primary");
                regBtn.classList.add("btn-large");
                regBtn.onclick = () => {
                    window.location.href = "login.html";
                };
                regBtnDiv.appendChild(regBtn);
            }
            warnEl.textContent = "Username already exists";
        }
        else {
            users[usernameEl.value] = {
                password: passwordEl.value,
                email: emailEl.value,
                posts: []
            };
            console.log(users);
            localStorage.setItem("users", JSON.stringify(users));
            load();
            window.location.href = "feed.html";
        }
    }

    function newPost () {
        const titleEl = document.querySelector("#newPostTitle");
        const bodyEl = document.querySelector("#newPostBody");
        let posts = localStorage.getItem("posts");
        if (!posts) {
            localStorage.setItem("posts", "{}");
            posts = "{}";
        }
        const postsObj = JSON.parse(posts);
        const newPost = {
            title: titleEl.value,
            body: bodyEl.value,
            date: Date.now(),
            user: localStorage.getItem("userName"),
            upvotes: {},
            downvotes: {}
        };
        let postId = Math.floor(Math.random() * 1000000000);
        while (postsObj[postId]) {
            postId = Math.floor(Math.random() * 1000000000);
        }
        newPost.postId = postId;
        postsObj[postId] = newPost;
        localStorage.setItem("posts", JSON.stringify(postsObj));
        const users = localStorage.getItem("users");
        const usersObj = JSON.parse(users);
        usersObj[localStorage.getItem("userName")].posts.push(postId);
        localStorage.setItem("users", JSON.stringify(usersObj));
        window.location.href = "feed.html";
    }

    function feed () {
        let posts = localStorage.getItem("posts");
        if (!posts) {
            localStorage.setItem("posts", "{}");
            posts = "{}";
        }
        const postsObj = JSON.parse(posts);
        let postsArr = Object.values(postsObj);

        if (postsArr.length === 0) {
            const noPostsEl = document.createElement("h3");
            noPostsEl.style.color = "white";
            noPostsEl.textContent = "No posts yet!";
            document.querySelector("#posts").appendChild(noPostsEl);
        }

        let sortedArray = postsArr.sort((a, b) => new Date(b.date) - new Date(a.date));

        for (const post of sortedArray) {
            const postEl = document.createElement("div");
            postEl.classList.add("post");

            const titleEl = document.createElement("h3");
            titleEl.style.textAlign = "left";
            titleEl.textContent = post.title;

            const bodyEl = document.createElement("h5");
            bodyEl.style.textAlign = "left";
            bodyEl.textContent = post.body;

            const postInfoEl = document.createElement("div");
            postInfoEl.classList.add("post-info");

            const authorEl = document.createElement("span");
            authorEl.classList.add("author");
            authorEl.textContent = post.user;

            const votesEl = document.createElement("span");

            const upVoteCountEl = document.createElement("span");
            upVoteCountEl.style.paddingRight = "5px";
            upVoteCountEl.textContent = Object.keys(post.upvotes).length;
            const upvoteEl = document.createElement("button");
            upvoteEl.classList.add("upvote-btn");
            const upvoteIEl = document.createElement("i");
            upvoteIEl.classList.add("fa-solid", "fa-arrow-up");
            upvoteEl.appendChild(upvoteIEl);
            upvoteEl.onclick = () => {
                if (post.upvotes[localStorage.getItem("userName")]) {
                    delete post.upvotes[localStorage.getItem("userName")];
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length;
                    upvoteEl.style.color = "white";
                } else if (post.downvotes[localStorage.getItem("userName")]) {
                    delete post.downvotes[localStorage.getItem("userName")];
                    post.upvotes[localStorage.getItem("userName")] = true;
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length;
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length;
                    downvoteEl.style.color = "white";
                    upvoteEl.style.color = "black";
                } else {
                    post.upvotes[localStorage.getItem("userName")] = true;
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length;
                    upvoteEl.style.color = "black";
                }
            };

            const downVoteCountEl = document.createElement("span");
            downVoteCountEl.style.paddingRight = "5px";
            downVoteCountEl.style.paddingLeft = "5px";
            downVoteCountEl.textContent =  Object.keys(post.downvotes).length;
            const downvoteEl = document.createElement("button");
            downvoteEl.classList.add("downvote-btn");
            const downvoteIEl = document.createElement("i");
            downvoteIEl.classList.add("fa-solid", "fa-arrow-down");
            downvoteEl.appendChild(downvoteIEl);
            downvoteEl.onclick = () => {
                if (post.downvotes[localStorage.getItem("userName")]) {
                    delete post.downvotes[localStorage.getItem("userName")];
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length;
                    downvoteEl.style.color = "white";
                } else if (post.upvotes[localStorage.getItem("userName")]) {
                    delete post.upvotes[localStorage.getItem("userName")];
                    post.downvotes[localStorage.getItem("userName")] = true;
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length;
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length;
                    downvoteEl.style.color = "black";
                    upvoteEl.style.color = "white";
                } else {
                    post.downvotes[localStorage.getItem("userName")] = true;
                    postsObj[post.postId] = post;
                    localStorage.setItem("posts", JSON.stringify(postsObj));
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length;
                    downvoteEl.style.color = "black";
                }
            };

            votesEl.appendChild(upVoteCountEl);
            votesEl.appendChild(upvoteEl);
            votesEl.appendChild(downVoteCountEl);
            votesEl.appendChild(downvoteEl);
            postInfoEl.appendChild(authorEl);
            postInfoEl.appendChild(votesEl);

            postEl.appendChild(titleEl);
            postEl.appendChild(bodyEl);
            postEl.appendChild(postInfoEl);

            document.querySelector("#posts").appendChild(postEl);
        }

    }

    function logout () {
        localStorage.setItem("userName", "");
        window.location.href = "index.html";
    }

    function isLogged () {
        if (localStorage.getItem("userName") && localStorage.getItem("username") !== "") {
            window.location.href = "feed.html";
        } else {
            window.location.href = "index.html";
        }
    }

    var fillPosts = {
    	"1235767890": {
    	title: "Luigi for President!",
    	user: "fakeguy45",
    	body: "Ah, the age-old question: why would Luigi make a good president? This is a fair inquiry, but one that can be easily answered with a few simple facts.\n\nFirst and foremost, Luigi is a born leader. He’s been the driving force behind the Mario Brothers’ adventures since day one. He’s brave, he’s loyal, and he’s willing to take risks. All of these qualities would serve him well in the Oval Office.\n\nSecond, Luigi has a knack for solving problems. He’s a master tactician and is always quick to come up with a plan. This ability would be invaluable for tackling the most challenging issues that the country faces.\n\nThird, Luigi is no stranger to adversity. He’s been bullied by Bowser and his minions countless times, but has always managed to come out on top. This determination and resilience would make him an excellent president.\n\nFinally, Luigi is a kind and compassionate person. He always puts the needs of others before his own and is willing to do whatever it takes to help those in need.\n\nIn conclusion, Luigi would be an outstanding president. He’s a born leader, a problem solver,",
    	message: "Luigi for President!",
    	date: "2015-01-01T00:00:00Z",
    	upvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true",
    		gilfd: "true"
    	},
    	downvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true",
    		gilfd: "true",
    		jim: "true",
    		joe: "true",
    		jane69: "true",
    		jane69e: "true"
    	},
    	post_id: "1235767890"
    },
    	"1235767891": {
    	title: "I don't like the U of U",
    	user: "Max_Hall",
    	body: "I don't like Utah. In fact, I hate them. I hate everything about them. I hate their program. I hate their fans. I hate everything. So, it feels good to send those guys home. They didn't deserve it. It was our time and it was our time to win. We deserved it. We played as hard as we could tonight, and it felt really good to send them home and to get them out of here, so it is a game I'll always remember.",
    	date: "2018-01-01T00:00:00Z",
    	upvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true",
    		gilfd: "true",
    		jim: "true",
    		joe: "true",
    		jane69: "true",
    		jane69de: "true",
    		sdteve: "true",
    		johndode: "true",
    		jadne: "true",
    		gidlfd: "true",
    		jidm: "true",
    		jode: "true",
    		jande69: "true",
    		jande69e: "true"
    	},
    	downvotes: {
    		jode: "true"
    	},
    	post_id: "1235767891"
    },
    	"1235767898": {
    	title: "The Easter Bunny: Fact or Fiction?",
    	user: "yourmom.com",
    	body: "This is a contentious topic that has been debated for centuries. While many people are convinced of the Easter Bunny's existence, others remain unconvinced. To settle the debate once and for all, I have compiled a list of compelling arguments in favor of the Easter Bunny being real. \n\nFirst, it is undeniable that Easter eggs magically appear in homes on Easter morning. This is a clear indication that the Easter Bunny is real — who else could possibly be responsible for such a feat? Second, there are countless reports of people seeing the Easter Bunny in the wild. From sightings of the Easter Bunny hopping around in parks to more recent reports of the Easter Bunny flying in a hot air balloon, the evidence is hard to ignore. \n\nThird, the Easter Bunny has a rich history. The origins of the Easter Bunny can be traced back to ancient mythology. It is believed that the Easter Bunny was a symbol of fertility used by pagans to celebrate spring. This further proves that the Easter Bunny is real. \n\nFinally, the Easter Bunny has been part of our cultural fabric for centuries. From Easter egg hunts to chocolate bunnies, the Easter Bunny is an integral part of Easter celebrations around the world.",
    	date: "2016-01-01T00:00:00Z",
    	upvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true",
    		gilfd: "true",
    		jim: "true",
    		joe: "true",
    		jane69: "true",
    		jane69de: "true",
    		sdteve: "true",
    		johndode: "true",
    		jadne: "true",
    		gidlfd: "true",
    		jidm: "true",
    		jode: "true",
    		jande69: "true",
    		jande69e: "true"
    	},
    	downvotes: {
    		jode: "true",
    		jande69: "true",
    		jande69e: "true"
    	},
    	post_id: "1235767898"
    },
    	"1235767899": {
    	title: "The color green makes me sleepy",
    	body: "Green is a calming and soothing color, which can have a calming effect on the mind and body. Research has shown that people who are exposed to the color green for long periods of time tend to feel more relaxed and have a lower heart rate. This can lead to sleepiness as the body is more relaxed and the mind is able to focus on restful thoughts. Additionally, green is a natural color found in nature, which can signal our bodies to slow down, relax, and prepare for rest. All of these factors can contribute to why green makes us sleepy.",
    	user: "johnydoe",
    	message: "",
    	date: "2014-01-01T00:00:00Z",
    	upvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true"
    	},
    	downvotes: {
    		steve: "true",
    		johndoe: "true",
    		jane: "true",
    		gilfd: "true",
    		jim: "true",
    		joe: "true",
    		jane69: "true",
    		johndode: "true",
    		jadne: "true",
    		gidlfd: "true",
    		jidm: "true",
    		jode: "true",
    		jande69: "true",
    		jande69e: "true"
    	},
    	post_id: "1235767899"
    }
    };

    function load$1 () {
        console.log("load");
        let posts = localStorage.getItem("posts");
        if (!posts || posts === "{}") {
            localStorage.setItem("posts", JSON.stringify(fillPosts));
        }
        console.log(localStorage.getItem("posts"));
    }

    window.load = load$1;
    window.isLogged = isLogged;
    window.logout = logout;
    window.feed = feed;
    window.login = login;
    window.create = create;
    window.newPost = newPost;

})();
//# sourceMappingURL=bundle.js.map
