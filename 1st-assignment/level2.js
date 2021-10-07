// 1-st assginment level2
// 자신의 조원들을 소개할 수 있는 json Array 만들기

const members = [
    { name: "손시형", subway: "서울대입구역", age: 24, part: "Server", sopt: "YB" },
    { name: "정설희", subway: "상도역", age: 23, part: "Server", sopt: "OB" },
    { name: "김희빈", subway: "대방역", age: 24, part: "Server", sopt: "OB" },
    { name: "김진욱", subway: "상도역", age: 25, part: "Server", sopt: "YB" },
];

console.log(`노량진조의 멤버를 소개합니다!!`);
members.forEach(member =>
        console.log(`저는 ${member.subway}에 거주중인 ${member.part}파트 ${member.sopt}, ${member.name}입니다!`),
    );
