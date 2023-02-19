

export default function () {
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