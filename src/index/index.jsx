import React from 'react';
import './index.css';

export class Index extends React.Component {
  render() {
    return (
        <div id="body">
                <h2>Welcome to</h2>
                <h1>Popular Opinion</h1>
                <p className="lead">Popular Opinion is the social media site that allows you to get your opinion
                    heard.</p>
                <p className="lead">Login or create an account and start sharing your thoughts and opinions with the
                    world.</p>
            <form method="get" action="login">
                <div id="loginDiv">
                    <button id="login" className="btn-secondary btn-large">Login</button>
                </div>
            </form>
            <form method="get" action="create">
                <div id="regButton">
                    <button id="register" className="btn-primary btn-large">Sign up</button>
                </div>
            </form>

        </div>
    );
  }
}