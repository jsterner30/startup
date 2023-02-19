

function newPost () {
    const titleEl = document.querySelector("#newPostTitle")
    const bodyEl = document.querySelector("#newPostBody")
    let posts = localStorage.getItem("posts")
    if (!posts) {
        localStorage.setItem("posts", "{}")
        posts = "{}"
    }
    const postsObj = JSON.parse(posts)
    const newPost = {
        title: titleEl.value,
        body: bodyEl.value,
        date: Date.now(),
        user: localStorage.getItem("userName"),
        upvotes: {},
        downvotes: {}
    }
    let postId = Math.floor(Math.random() * 1000000000);
    while (postsObj[postId]) {
        postId = Math.floor(Math.random() * 1000000000);
    }
    newPost.postId = postId
    postsObj[postId] = newPost
    localStorage.setItem("posts", JSON.stringify(postsObj))
    const users = localStorage.getItem("users")
    const usersObj = JSON.parse(users)
    usersObj[localStorage.getItem("userName")].posts.push(postId)
    localStorage.setItem("users", JSON.stringify(usersObj))
    window.location.href = "feed.html"
}