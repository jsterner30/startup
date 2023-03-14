
async function login () {
    const usernameEl = document.querySelector("#loginUsername")
    const passwordEl = document.querySelector("#loginPassword")
    const warnEl = document.querySelector("#loginWarning")

    if (usernameEl.value === "" || passwordEl.value === "") {
        warnEl.textContent = "Please fill in all fields"
    } else {
        const response = await fetch("/api/auth/login", {
            method: "post",
            body: JSON.stringify({password: passwordEl.value, username: usernameEl.value}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        if (response?.status === 200) {
            localStorage.setItem('userName', usernameEl.value);
            window.location.href = "feed.html"
        } else if (response.status === 404) {
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
        } else if (response.status === 401) {
            const loginRegBtn = document.querySelector("#loginRegisterButton")
            if (loginRegBtn) {
                loginRegBtn.remove()
            }
            warnEl.textContent = "Incorrect password"
        }
        else {
            warnEl.textContent = "An error occurred"
        }
    }
}