const members = require("./members");

const getOnline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = members.filter(member => member.location === "online");
            resolve(data);
        }, 500);
    });
};

const getOffline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = members.filter(member => member.location === "offline");
            resolve(data);
        }, 500);
    });
};

const getYB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = members.filter(member => member.group === "YB");
            resolve(data);
        }, 500);
    });
};

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = members.filter(member => member.group === "OB");
            resolve(data);
        }, 500);
    });
};

// 온라인이면서 OB인 멤버
getOnline(members).then(getOB).then(console.log);

// YB이면서 오프라인인 멤버
getYB(members).then(getOffline).then(console.log);