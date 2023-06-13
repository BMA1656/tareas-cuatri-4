export class Publisher {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    publish(data) {
        this.observers.forEach(cb => cb(data))

    }
}
