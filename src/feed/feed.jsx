import React from 'react';
import './feed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.getPosts()
    }

    componentWillMount() {
        window.addEventListener('load', this.getPosts);
    }

    componentDidMount() {
        window.addEventListener('load', this.getPosts);
    }

    async getPosts() {
        let postsArr = await fetch('/api/posts', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
         postsArr = await postsArr.json()
        console.log(postsArr)
        if (postsArr.length === 0) {
            const noPostsEl = document.createElement("h3")
            noPostsEl.style.color = "white"
            noPostsEl.textContent = "No posts yet!"
            document.querySelector("#posts").appendChild(noPostsEl)
        }
        let sortedArray = postsArr.sort((a, b) => new Date(b.date) - new Date(a.date));
        for (const post of sortedArray) {
            const postEl = document.createElement("div")
            postEl.classList.add("post")
            const titleEl = document.createElement("h3")
            titleEl.style.textAlign = "left"
            titleEl.textContent = post.title
            const bodyEl = document.createElement("h5")
            bodyEl.style.textAlign = "left"
            bodyEl.textContent = post.body
            const postInfoEl = document.createElement("div")
            postInfoEl.classList.add("post-info")
            const authorEl = document.createElement("span")
            authorEl.classList.add("author")
            authorEl.textContent = post.user
            const votesEl = document.createElement("span")
            const upVoteCountEl = document.createElement("span")
            upVoteCountEl.style.paddingRight = "5px"
            upVoteCountEl.textContent = Object.keys(post.upvotes).length
            const upvoteEl = document.createElement("button")
            upvoteEl.classList.add("upvote-btn")
            const upvoteIEl = document.createElement("i")
           upvoteIEl.classList.add("fa-solid", "fa-arrow-up")
           upvoteEl.appendChild(upvoteIEl)
            upvoteEl.onclick = async () => {
                if (post.upvotes[localStorage.getItem("userName")]) {
                    delete post.upvotes[localStorage.getItem("userName")]
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length
                    upvoteEl.style.color = "white"
                } else if (post.downvotes[localStorage.getItem("userName")]) {
                    delete post.downvotes[localStorage.getItem("userName")]
                    post.upvotes[localStorage.getItem("userName")] = true
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length
                    downvoteEl.style.color = "white"
                    upvoteEl.style.color = "black"
                } else {
                    post.upvotes[localStorage.getItem("userName")] = true
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length
                    upvoteEl.style.color = "black"
                }
            }
            const downVoteCountEl = document.createElement("span")
            downVoteCountEl.style.paddingRight = "5px"
            downVoteCountEl.style.paddingLeft = "5px"
            downVoteCountEl.textContent =  Object.keys(post.downvotes).length
            const downvoteEl = document.createElement("button")
            downvoteEl.classList.add("downvote-btn")
            const downvoteIEl = document.createElement("i")
            downvoteIEl.classList.add("fa-solid", "fa-arrow-down")
            downvoteEl.appendChild(downvoteIEl)
            downvoteEl.onclick = async () => {
                if (post.downvotes[localStorage.getItem("userName")]) {
                    delete post.downvotes[localStorage.getItem("userName")]
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length
                    downvoteEl.style.color = "white"
                } else if (post.upvotes[localStorage.getItem("userName")]) {
                    delete post.upvotes[localStorage.getItem("userName")]
                    post.downvotes[localStorage.getItem("userName")] = true
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length
                    upVoteCountEl.textContent = Object.keys(post.upvotes).length
                    downvoteEl.style.color = "black"
                    upvoteEl.style.color = "white"
                } else {
                    post.downvotes[localStorage.getItem("userName")] = true
                    await fetch('/api/post', {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(post),
                    })
                    downVoteCountEl.textContent = Object.keys(post.downvotes).length
                    downvoteEl.style.color = "black"
                }
            }
            votesEl.appendChild(upVoteCountEl)
            votesEl.appendChild(upvoteEl)
            votesEl.appendChild(downVoteCountEl)
            votesEl.appendChild(downvoteEl)
            postInfoEl.appendChild(authorEl)
            postInfoEl.appendChild(votesEl)
            postEl.appendChild(titleEl)
            postEl.appendChild(bodyEl)
            postEl.appendChild(postInfoEl)
            document.querySelector("#posts").appendChild(postEl)
        }
    }

    render() {
        return (
            <div id="posts"></div>
        )
    }
}