

export default function () {
    const usernameEl = document.querySelector("#registerUsername")
    const passwordEl = document.querySelector("#registerPassword")
    const emailEl = document.querySelector("#registerEmail")
    const confirmEl = document.querySelector("#registerConfirm")
    const warnEl = document.querySelector("#registerWarning")
    localStorage.setItem("userName", usernameEl.value)
    const users = JSON.parse(localStorage.getItem("users"))
    if (!users) localStorage.setItem("users", "{}")

    if (!usernameEl.value || !passwordEl.value || !emailEl.value || !confirmEl.value) {
        warnEl.textContent = "Please fill out all fields"
    }
    else if (users[usernameEl.value]) {
        if (!document.querySelector("#registerLoginButton")) {
            const regBtnDiv = document.querySelector("#registerButtonDiv")
            const regBtn = document.createElement("button")
            regBtn.textContent = "Login Instead"
            regBtn.id = "registerLoginButton"
            regBtn.style.backgroundColor = "rgb(210, 45, 80)"
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
        localStorage.removeItem("users")
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "feed.html"
    }
}