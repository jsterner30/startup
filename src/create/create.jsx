import React from 'react';
import './create.css';

export class Create extends React.Component {
    async create () {
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
            window.location.href = "feed"
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
                    window.location.href = "login"
                }
                regBtnDiv.appendChild(regBtn)
            }
            warnEl.textContent = "Username already exists"
        } else {
            warnEl.textContent = "An error occurred"
        }
    }
    }

    render() {
        return(
            <div id="bodyCreate">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h2 className="text-center">Welcome to</h2>
                            <h1 className="text-center">Popular Opinion</h1>
                            <div class="inDiv" className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" id="registerUsername"/>
                            </div>

                            <div className="form-group" class="inDiv">
                                <label>Email Address</label>
                                <input type="email" className="form-control" id="registerEmail"/>
                            </div>

                            <div className="form-group" class="inDiv">
                                <label>Password</label>
                                <input type="password" className="form-control" id="registerPassword"/>
                            </div>

                            <div className="form-group" class="inDiv">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="registerConfirm"/>
                            </div>
                            <div>
                                <div class="inDiv">
                                    <button id="reg" className="btn-primary btn-large" onClick={() => this.create()}>Create Account</button>
                                </div>
                                <div class="inDiv" className="form-group" id="registerButtonDiv">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 id="registerWarning"/>
                </div>
            </div>
        )}
}