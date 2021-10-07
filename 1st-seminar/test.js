// 3가지 변수 선언법
// var / let / const

// var : 재선언 / 재할당 가능
var variableVar = "123";
var variableVar = "321"; //재선언 가능
variableVar = "12345"; //재할당 가능

console.log("variableVar", variableVar);

////////////////////////////////////////////////////////////////

// let: 재선언 불가 / 재할당 가능
let variableLet = "123";
// let variableLet = "321"; //재선언 불가
variableLet = "12345"; //재할당 가능

console.log("variableLet", variableLet);

////////////////////////////////////////////////////////////////

// const : 재선언 / 재할당 불가
const variableConst = "123";
// const variableConst = "321"; //재선언 불가
// variableConst = "12345"; //재할당 불가

console.log("variableConst", variableConst);


// 쉽게 말해 let은 바뀔 수 있는 값, const는 바뀌지 않는 값


// var 과 let은 초기화 값 필요 X
// const는 처음부터 값을 할당해야함~
var someVar;
let someLet;
const someConst; //error -> 실행해봐야 Error인지 알 수 있음..


