

export default function () {
    const usernameEl = document.querySelector("#loginUsername")
    const passwordEl = document.querySelector("#loginPassword")
    const warnEl = document.querySelector("#loginWarning")
    localStorage.setItem("userName", usernameEl.value)
    let users = localStorage.getItem("users")
    if (!users) {
        localStorage.setItem("users", "{}")
        users = "{}"
    }
    users = JSON.parse(users)

    if (usernameEl.value === "" || passwordEl.value === "") {
        warnEl.textContent = "Please fill in all fields"
    }
    else if (!users[usernameEl.value]) {
        if (!document.querySelector("#loginRegisterButton")) {
            const regBtnDiv = document.querySelector("#registerLoginButtonDiv")
            const regBtn = document.createElement("button")
            regBtn.textContent = "Sign Up Instead"
            regBtn.id = "loginRegisterButton"
            regBtn.style.paddingInline = "10%"
            regBtn.classList.add("btn-primary")
            regBtn.classList.add("btn-large")
            regBtn.onclick = () => {
                window.location.href = "create.html"
            }
            regBtnDiv.appendChild(regBtn)
        }
        warnEl.textContent = "Username not found"
    } else if (users[usernameEl.value].password === passwordEl.value) {
        load()
        window.location.href = "feed.html"
    }
    else {
        warnEl.textContent = "Incorrect password"
        const loginRegBtn = document.querySelector("#loginRegisterButton")
        if (loginRegBtn) {
            loginRegBtn.remove()
        }
    }
}