import React from "react";
import './about.css';

export class About extends React.Component {
    async showRandomCat() {
        const response = await fetch("https://cataas.com/cat");
        const catImage = await response.blob();
        document.getElementById("cat-container").src = URL.createObjectURL(catImage);
    }

    render() {
        return (
            <div id="bodyAbout">
                <p className="lead">
                    Popular Opinion is a social media site that allows you to express your opinion on the topics that
                    matter to you. Whether you’re interested in the latest news, sports, politics, entertainment, or
                    something else entirely, we provide a platform for you to share your thoughts with the world. With
                    Popular Opinion, you can connect with like-minded people and engage in meaningful conversations,
                    discover great content, and make your voice heard.
                </p>
                <p className="lead">
                    At Popular Opinion, we believe that everyone has something important to contribute to the
                    conversation – no matter who they are or where they come from. We strive to create a safe and
                    supportive environment where anyone can share their opinion without fear of judgement or censorship.
                    We also believe in protecting your privacy and security, so we make sure to take all necessary
                    measures to ensure your data is secure and protected.
                </p>
                <p className="lead">
                    We want Popular Opinion to be a place where people can express their opinion and be heard, so we
                    encourage everyone to join the conversation and make their voice heard. So if you’re looking for a
                    place to express your opinion and engage in meaningful conversations, join us today and become part
                    of the Popular Opinion community!
                </p>
                <button onClick={() => this.showRandomCat()} className="btn-primary btn-large">Show Me
                    A Random Cat!
                </button>
                <div>
                    <img id="cat-container" src=""/>
                </div>
            </div>
        )
    }
}