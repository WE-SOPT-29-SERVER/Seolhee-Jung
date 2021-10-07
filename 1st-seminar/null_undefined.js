// 기본 자려형 2가지
// 원시 타입 & 객체 타입

console.log(typeof 1);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());

console.log(typeof null); // object로 뜬다.. 왜? -> 버그 ㅋㅋ
// null은 원시타입이 맞음 ㅎ

// null !== undefined
console.log(null == undefined); // true
console.log(null === undefined); // false


const num1 = 1;
const num2 = 2;
const str = "2";

const bool = true;
console.log(num1 == bool); // true
console.log(num2 == bool); // false

// Truthy
// 대충 true다
console.log(Boolean(10));
console.log(Boolean(-41));
console.log(Boolean('문자'));
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));

// Falsy
// 대충 false다
// false, 0, null, undefined
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(false));


////////////////////////////////
// Boolean으로 typeCasting을 이런식으로 사용할 수 있음!
const post = await postsGET();
if (!post) {
    // logic
}

const {name, email, pasword} = req.body;
if(!name) {
    // logic
}
