import fillPosts from "./util/posts.json";


export default function () {
    console.log("load")
    let posts = localStorage.getItem("posts")
    if (!posts || posts === "{}") {
        localStorage.setItem("posts", JSON.stringify(fillPosts))
    }
    console.log(localStorage.getItem("posts"))
}