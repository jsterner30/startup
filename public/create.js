
async function create () {
    const usernameEl = document.querySelector("#registerUsername")
    const passwordEl = document.querySelector("#registerPassword")
    const emailEl = document.querySelector("#registerEmail")
    const confirmEl = document.querySelector("#registerConfirm")
    const warnEl = document.querySelector("#registerWarning")

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (usernameEl.value === "" || passwordEl.value === "" || emailEl.value === "" || confirmEl.value === "") {
        warnEl.textContent = "Please fill out all fields"
    } else if (!regex.test(emailEl.value)) {
        warnEl.textContent = "Invalid Email Format"
        const loginRegBtn = document.querySelector("#registerLoginButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    } else if (passwordEl.value.length < 8) {
        warnEl.textContent = "Password must be at least 8 characters"
        const loginRegBtn = document.querySelector("#loginRegisterButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    } else if (passwordEl.value !== confirmEl.value) {
        warnEl.textContent = "Passwords do not match"
        const loginRegBtn = document.querySelector("#loginRegisterButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    } else {
        const response = await fetch("/api/auth/create", {
            method: "post",
            body: JSON.stringify({email: emailEl.value, password: passwordEl.value, username: usernameEl.value}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        if (response?.status === 200) {
            localStorage.setItem('userName', usernameEl.value);
            window.location.href = "feed.html"
        } else if (response.status === 409) {
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
        } else {
            warnEl.textContent = "An error occurred"
        }
    }
}