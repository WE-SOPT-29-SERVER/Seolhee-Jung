const num = 2;
const str = "2";


// 동등 연산자 : 값만 비교
// == equal
// != not equal

console.log(num == str); // true
console.log(num + str); // 11 (typecasting)
console.log(typeof (num + str)); // string

console.log(Number(num) + Number(num));


// 일치 연산자 : 값 & 타입 비교
// === equal
// !== not equal
console.log(num === str); // false

// 동등 연산자가 아니라, 일치 연산자를 쓰는게 안전하다!!
// 안 전 제 일