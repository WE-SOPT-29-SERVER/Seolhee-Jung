// Ctrl+P : 파일 이름 검색 ㅎ

/* Object 생성자 함수 */
const person = new Object();

// 프로퍼티 추가
person.name = "정설희"; // 점표기법 접근
person.part = "Server";
person["group"] = "OB"; // 브라켓 표기법 접근
person.sayHello = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
};


console.log(typeof person);
console.log(person);

person.sayHello();

console.log("================================================");

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {};
console.log(typeof emptyObject);

const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function() {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function() {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();

// this를 쓰기 위해서는 화살표함수보다는 함수 선언식을 쓰는게 좋다 ㅎ


// 화살표 함수 ver.
// const animal = {
//     animalType: "dog",
//     animalName: "뽀삐",
//     animalFriends: ["코코", "초코", "쿠키"],
//     bark: () => {
//         console.log(`${this.animalName} : 멍멍 `);
//     },
//     thisFriends: (animalFriends) => {
//         animalFriends.forEach(friend => {
//             console.log(`${this.animalName}의 친구: ${friend}`);
//         });
//     },
// };

// console.log(animal);
// animal.bark();
// animal.thisFriends(animal.animalFriends);
