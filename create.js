
function create () {
    const usernameEl = document.querySelector("#registerUsername")
    const passwordEl = document.querySelector("#registerPassword")
    const emailEl = document.querySelector("#registerEmail")
    const confirmEl = document.querySelector("#registerConfirm")
    const warnEl = document.querySelector("#registerWarning")
    localStorage.setItem("userName", usernameEl.value)
    let users = localStorage.getItem("users")
    if (!users) {
        localStorage.setItem("users", "{}")
        users = "{}"
    }
    users = JSON.parse(users)
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (usernameEl.value === "" || passwordEl.value === "" || emailEl.value === "" || confirmEl.value === "") {
        warnEl.textContent = "Please fill out all fields"
    }
    else if (!regex.test(emailEl.value)) {
        warnEl.textContent = "Invalid Email Format"
        const loginRegBtn = document.querySelector("#registerLoginButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    }

    else if(passwordEl.value.length < 8) {
        warnEl.textContent = "Password must be at least 8 characters"
        const loginRegBtn = document.querySelector("#loginRegisterButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    }

    else if (passwordEl.value !== confirmEl.value) {
        warnEl.textContent = "Passwords do not match"
        const loginRegBtn = document.querySelector("#loginRegisterButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    }

    else if (users[usernameEl.value]) {
        if (!document.querySelector("#registerLoginButton")) {
            const regBtnDiv = document.querySelector("#registerButtonDiv")
            const regBtn = document.createElement("button")
            regBtn.textContent = "Login Instead"
            regBtn.id = "registerLoginButton"
            regBtn.style.paddingInline = "10%"
            regBtn.style.paddingTop = "15px"
            regBtn.classList.add("btn-primary")
            regBtn.classList.add("btn-large")
            regBtn.onclick = () => {
                window.location.href = "login.html"
            }
            regBtnDiv.appendChild(regBtn)
        }
        warnEl.textContent = "Username already exists"
    }
    else {
        users[usernameEl.value] = {
            password: passwordEl.value,
            email: emailEl.value,
            posts: []
        }
        console.log(users)
        localStorage.setItem("users", JSON.stringify(users))
        load()
        window.location.href = "feed.html"
    }
}

function load () {
    const fillPosts = {
        "1235767899": {
            "title": "The color green makes me sleepy",
            "body": "Green is a calming and soothing color, which can have a calming effect on the mind and body. Research has shown that people who are exposed to the color green for long periods of time tend to feel more relaxed and have a lower heart rate. This can lead to sleepiness as the body is more relaxed and the mind is able to focus on restful thoughts. Additionally, green is a natural color found in nature, which can signal our bodies to slow down, relax, and prepare for rest. All of these factors can contribute to why green makes us sleepy.",
            "user": "johnydoe",
            "message": "",
            "date": "2014-01-01T00:00:00Z",
            "upvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true"
            },
            "downvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true",
                "gilfd": "true",
                "jim": "true",
                "joe": "true",
                "jane69": "true",
                "johndode": "true",
                "jadne": "true",
                "gidlfd": "true",
                "jidm": "true",
                "jode": "true",
                "jande69": "true",
                "jande69e": "true"
            },
            "post_id": "1235767899"
        },
        "1235767890": {
            "title": "Luigi for President!",
            "user": "fakeguy45",
            "body": "Ah, the age-old question: why would Luigi make a good president? This is a fair inquiry, but one that can be easily answered with a few simple facts.\n\nFirst and foremost, Luigi is a born leader. He’s been the driving force behind the Mario Brothers’ adventures since day one. He’s brave, he’s loyal, and he’s willing to take risks. All of these qualities would serve him well in the Oval Office.\n\nSecond, Luigi has a knack for solving problems. He’s a master tactician and is always quick to come up with a plan. This ability would be invaluable for tackling the most challenging issues that the country faces.\n\nThird, Luigi is no stranger to adversity. He’s been bullied by Bowser and his minions countless times, but has always managed to come out on top. This determination and resilience would make him an excellent president.\n\nFinally, Luigi is a kind and compassionate person. He always puts the needs of others before his own and is willing to do whatever it takes to help those in need.\n\nIn conclusion, Luigi would be an outstanding president. He’s a born leader, a problem solver,",
            "message": "Luigi for President!",
            "date": "2015-01-01T00:00:00Z",
            "upvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true",
                "gilfd": "true"
            },
            "downvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true",
                "gilfd": "true",
                "jim": "true",
                "joe": "true",
                "jane69": "true",
                "jane69e": "true"
            },
            "post_id": "1235767890"
        },
        "1235767898": {
            "title": "The Easter Bunny: Fact or Fiction?",
            "user": "yourmom.com",
            "body": "This is a contentious topic that has been debated for centuries. While many people are convinced of the Easter Bunny's existence, others remain unconvinced. To settle the debate once and for all, I have compiled a list of compelling arguments in favor of the Easter Bunny being real. \n\nFirst, it is undeniable that Easter eggs magically appear in homes on Easter morning. This is a clear indication that the Easter Bunny is real — who else could possibly be responsible for such a feat? Second, there are countless reports of people seeing the Easter Bunny in the wild. From sightings of the Easter Bunny hopping around in parks to more recent reports of the Easter Bunny flying in a hot air balloon, the evidence is hard to ignore. \n\nThird, the Easter Bunny has a rich history. The origins of the Easter Bunny can be traced back to ancient mythology. It is believed that the Easter Bunny was a symbol of fertility used by pagans to celebrate spring. This further proves that the Easter Bunny is real. \n\nFinally, the Easter Bunny has been part of our cultural fabric for centuries. From Easter egg hunts to chocolate bunnies, the Easter Bunny is an integral part of Easter celebrations around the world.",
            "date": "2016-01-01T00:00:00Z",
            "upvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true",
                "gilfd": "true",
                "jim": "true",
                "joe": "true",
                "jane69": "true",
                "jane69de": "true",
                "sdteve": "true",
                "johndode": "true",
                "jadne": "true",
                "gidlfd": "true",
                "jidm": "true",
                "jode": "true",
                "jande69": "true",
                "jande69e": "true"
            },
            "downvotes": {
                "jode": "true",
                "jande69": "true",
                "jande69e": "true"
            },
            "post_id": "1235767898"
        },
        "1235767891": {
            "title": "I don't like the U of U",
            "user": "Max_Hall",
            "body": "I don't like Utah. In fact, I hate them. I hate everything about them. I hate their program. I hate their fans. I hate everything. So, it feels good to send those guys home. They didn't deserve it. It was our time and it was our time to win. We deserved it. We played as hard as we could tonight, and it felt really good to send them home and to get them out of here, so it is a game I'll always remember.",
            "date": "2018-01-01T00:00:00Z",
            "upvotes": {
                "steve": "true",
                "johndoe": "true",
                "jane": "true",
                "gilfd": "true",
                "jim": "true",
                "joe": "true",
                "jane69": "true",
                "jane69de": "true",
                "sdteve": "true",
                "johndode": "true",
                "jadne": "true",
                "gidlfd": "true",
                "jidm": "true",
                "jode": "true",
                "jande69": "true",
                "jande69e": "true"
            },
            "downvotes": {
                "jode": "true"
            },
            "post_id": "1235767891"
        }
    }

    console.log("load")
    let posts = localStorage.getItem("posts")
    if (!posts || posts === "{}") {
        localStorage.setItem("posts", JSON.stringify(fillPosts))
    }
    console.log(localStorage.getItem("posts"))
}