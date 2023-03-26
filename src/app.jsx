import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { AuthState } from './login/authState';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { NewPost } from './newPost/newPost';
import { Index } from './index/index';
import { About } from './about/about';
import { Chat } from './chat/chat';
import { Create } from './create/create';
import { logout } from './logout/logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

    // Asynchronously determine if the user is authenticated by calling the service
    const [authState, setAuthState] = React.useState(AuthState.Unknown);
    React.useEffect(() => {
        if (userName) {
            fetch(`/api/user/${userName}`)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                })
                .then((user) => {
                    const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
                    setAuthState(state);
                });
        } else {
            setAuthState(AuthState.Unauthenticated);
        }
    }, [userName]);

    return (
        <div id="body">
                <header className='container-fluid'>
                    <nav id="bar" className='navbar fixed-top navbar-dark'>
                        <div id="brandName" className='navbar-brand'>
                            Popular Opinion
                        </div>
                        <menu className='navbar-nav'>
                            {authState === AuthState.Unauthenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>
                                    Login
                                </NavLink>
                            </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='feed'>
                                        Feed
                                    </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='newPost'>
                                        New Post
                                    </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='chat'>
                                        Chat
                                    </NavLink>
                                </li>
                            )}
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>
                                    About
                                </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/' onClick={(() => logout())}>
                                    Logout
                                </NavLink>
                            </li>
                            )}
                        </menu>
                    </nav>
                </header>

            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/create' element={<Create/>} />
                <Route path='/feed' element={<Feed/>} />
                <Route path='/newPost' element={<NewPost />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <div id="footer" className="container-fluid;">
                    <a href="https://github.com/jsterner30/startup">Author: Jaden Sterner</a>
                    <p className="text-muted">&copy; 2023 - Popular Opinion</p>
                </div>
            </footer>
        </div>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
