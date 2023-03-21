
async function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
        this.displayMsg('System', 'chat connected');
    };
    this.socket.onclose = (event) => {
        this.displayMsg('System', 'chat disconnected');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
            await this.displayMsg('User ' + msg.from, `${msg.value}`);
    }
}

async function displayMsg(from, msg) {
    const chatText = document.querySelector('#messages');
    chatText.innerHTML =
        `<div class="event"><span>${from}:</span> ${msg}</div>` + chatText.innerHTML;
}

async function broadcastEvent() {
    const event = {
        from: localStorage.getItem('userName'),
        value: document.querySelector('#chat-message-input').value
    };
    console.log(event)
    this.socket.send(JSON.stringify(event));
}