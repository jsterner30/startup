import React from 'react';
import './chat.css';
import { notifier } from "./notifier";

export function Chat()  {
    const [events, setEvent] = React.useState([]);
    React.useEffect(() => {
        notifier.addHandler(handleGameEvent);

        return () => {
            notifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
        setEvent([...events, event]);
        createMessageArray();
    }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
            console.log(event)
            const from = event.from;
            const message = event.message.msg;
            console.log(from, message)
            messageArray.push(
                <div key={i} className='event'>
                    <span className={'player-event'}>{from}: </span> {message}
                </div>
            );
        }
        return messageArray;
    }

    createMessageArray()

    function getMessage() {
        const message = document.getElementById("chat-message-input").value;
        const from = localStorage.getItem("userName")
        console.log(message, from)
        return {message, from};
    }

        return (
            <div id="top" >
                <div id="chat-container">
                    <div id="chat-div">
                        <div id="messages">{createMessageArray()}</div>
                    </div>
                    <div id="chat-input">
                        <input type="text" placeholder="Type your message here" id="chat-message-input"/>
                    </div>
                    <div id="submit-button">
                        <button id="chatButton" className="btn-primary btn-large" onClick={(() => notifier.broadcastEvent(getMessage()))}>Send</button>
                    </div>
                </div>
            </div>
        )
}