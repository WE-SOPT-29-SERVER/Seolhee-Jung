function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide
};

module.exports = calculator;

// module.exports = {add, subtract, multiply, divide}