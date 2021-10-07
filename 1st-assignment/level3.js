// 1-st assginment level3
// 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기

const members = require("./members")["members"];

let YB = [];
let OB = [];

members.forEach(member => {
    if (member.group === 'YB') {
        YB.push(member.name);
    } else {
        OB.push(member.name);
    }
});

function shuffle(array) { array.sort(() => Math.random() - 0.5); }
shuffle(YB);
shuffle(OB);

// 한 그룹 당 5~6명
const memberNum = 5;
const groupNum = Math.round(members.length / memberNum);
let groups = [];

for (let i=0; i<groupNum; i++) {
    groups.push([]);
}

for (let i=0; i<OB.length; i++) {
    groups[i%groupNum].push(OB[i]);
}
let k = OB.length % groupNum;

for (let i=0; i<YB.length; i++) {
    groups[(i+k) % groupNum].push(YB[i]);
}

console.log(groups);
