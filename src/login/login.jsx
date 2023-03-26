import React from "react";
import './login.css';

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    async login () {
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
                window.location.href = "feed"
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
                        window.location.href = "create"
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
            } else {
                warnEl.textContent = "An error occurred"
            }
        }
    }

    render() {
        return (
            <div id="loginBody">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2 className="text-center">Welcome to</h2>
                        <h1 className="text-center">Popular Opinion</h1>
                        <div className="form-group">
                            <label htmlFor="loginUsername">Username</label>
                            <input type="email" className="form-control" id="loginUsername"/>
                        </div>
                        <div className="form-group">
                            <label id="password">Password</label>
                            <input type="password" className="form-control" id="loginPassword"/>
                        </div>
                        <div>
                            <div id="buttons">
                                <button id="loginButton" className="btn-secondary btn-large"
                                        onClick={() => this.login()}>Login
                                </button>
                            </div>
                            <div className="form-group" id="registerLoginButtonDiv">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 id="loginWarning"/>
            </div>
            </div>
    );
    }
}