const sayHello = function() {
    return "hello"
}

const sayHelloBeta = () => "hello"

const sayHello2 = () => {
    return "hello"
}

const sayHello3 = (name) => {
    return `hello, ${name}`
}

const sayHello4 = (first, last) => {
    return `hello, ${first} ${last}`
}

setTimeout(() => {
    console.log("hi")
}, 1000)

function sayHelloRegular() {
    return "Hello"
}


// Arrow function doesn't work on constructor
function Person(n) {
    this.name = n
}

const me = new Person("Sina")