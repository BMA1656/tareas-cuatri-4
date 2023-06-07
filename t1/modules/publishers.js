export class publisher {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    publishBuild(value) {
        this.observers.forEach((observador)=>{
            observador.imprimir(value);
        });
    }
}

export class publisherB {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    publishBuild(value) {
        this.observers.forEach((observador)=>{
            observador.product(value);
        });
    }
}
export class publisherC {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    publishBuild(value) {
        this.observers.forEach((observador)=>{
            observador.color(value);
        });
    }
}