

function isLogged () {
    if (localStorage.getItem("userName") && localStorage.getItem("username") !== "") {
        window.location.href = "feed.html"
    } else {
        window.location.href = "index.html"
    }
}