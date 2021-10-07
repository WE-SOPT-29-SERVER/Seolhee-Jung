/* -------------------- */
/*   1. JSON 객체 실습    */
/* -------------------- */

const sopt = {
    name: "WE SOPT",
    slogan: "우리가 SOPT입니다",
    part: ["plan", "design", "android", "iOS", "server", "web"],
    number: 180,
    printName: function() {
        console.log("name:", this.name);
    },
    printNum: function() {
        console.log("number:", this.number);
    },
};

console.log("typeof sopt:", typeof sopt); // object

// +와 ,의 차이는?
console.log("sopt:" + sopt);
console.log("sopt:", sopt);
console.log("sopt :" + JSON.stringify(sopt)); //data의 내용을 보고싶으면 이렇게!
