async function newPost () {
    const titleEl = document.querySelector("#newPostTitle")
    const bodyEl = document.querySelector("#newPostBody")
    const newPost = {
        title: titleEl.value,
        body: bodyEl.value,
        date: Date.now(),
        user: localStorage.getItem("userName"),
        upvotes: {},
        downvotes: {}
    }
    let res = await fetch('/api/post', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newPost),
    });
    res = await res.json()
    console.log(res)
    if (res.postId) {
        let res2 = await fetch('/api/user/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({postId: res.postId, username: localStorage.getItem("userName")}),
        });
        if (res2.status === 200) window.location.href = "feed.html"
        else {
            const warnEl = document.querySelector("#loginWarning")
            warnEl.textContent = "Something went wrong. Please try again."
            console.log('REEEEE')
        }
    }
    else {
        const warnEl = document.querySelector("#loginWarning")
        warnEl.textContent = "Something went wrong. Please try again."
        console.log('REEEEE')
    }

}