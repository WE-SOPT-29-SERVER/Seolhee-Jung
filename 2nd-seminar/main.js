const sum = require('./sum');
const {add, subtract, multiply, divide} = require('./calculator');

const result = sum(1,3);
console.log("sum result:", result);
console.log("add(4,2)", add(4,2));
console.log("subtract(4,2)", subtract(4,2));
console.log("multiply(4,2)", multiply(4,2));
console.log("divide(4,2)", divide(4,2));