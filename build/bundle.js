
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    function login () {
        const usernameEl = document.querySelector("#loginUsername");
        const passwordEl = document.querySelector("#loginPassword");
        const warnEl = document.querySelector("#loginWarning");
        localStorage.setItem("userName", usernameEl.value);
        const users = JSON.parse(localStorage.getItem("users"));
        if (!users) localStorage.setItem("users", "{}");
        console.log(users);

        if (usernameEl.value === "" || passwordEl.value === "") {
            warnEl.textContent = "Please fill in all fields";
        }
        else if (!users[usernameEl.value]) {
            if (!document.querySelector("#loginRegisterButton")) {
                const regBtnDiv = document.querySelector("#registerLoginButtonDiv");
                const regBtn = document.createElement("button");
                regBtn.textContent = "Sign Up Instead";
                regBtn.id = "loginRegisterButton";
                regBtn.style.backgroundColor = "rgb(210, 45, 80)";
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
        const users = JSON.parse(localStorage.getItem("users"));
        if (!users) localStorage.setItem("users", "{}");

        if (!usernameEl.value || !passwordEl.value || !emailEl.value || !confirmEl.value) {
            warnEl.textContent = "Please fill out all fields";
        }
        else if (users[usernameEl.value]) {
            if (!document.querySelector("#registerLoginButton")) {
                const regBtnDiv = document.querySelector("#registerButtonDiv");
                const regBtn = document.createElement("button");
                regBtn.textContent = "Login Instead";
                regBtn.id = "registerLoginButton";
                regBtn.style.backgroundColor = "rgb(210, 45, 80)";
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
            localStorage.removeItem("users");
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "feed.html";
        }
    }

    window.login = login;
    window.create = create;

})();
//# sourceMappingURL=bundle.js.map
