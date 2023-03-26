class EventMessage {
    constructor(from, message) {
        this.from = from;
        this.message = message;
    }
}

class Notifier {
    events = [];
    handlers = [];

    constructor() {
        // When dev debugging we need to talk to the service and not the React debugger
        let port = window.location.port;
        if (process.env.NODE_ENV !== 'production') {
            port = 3000;
        }

        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('System', { msg: 'connected' }));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('System', { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(messObj) {
        const event = new EventMessage(messObj.from, { msg: messObj.message });
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }
}

const notifier = new Notifier();
export { notifier };
