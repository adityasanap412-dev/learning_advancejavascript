let message = "Es6 Module";

function user(name) {
    console.log(`Hello my name is ${name}`);
}

class test {
    constructor() {
        console.log("This is test class constructor");
    }
}

export { message, user, test };

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export class Calculator {
    constructor(name) {
        this.name = name;
        console.log(`Calculator created by ${name}`);
    }

    subtract(a, b) {
        return a - b;
    }
}