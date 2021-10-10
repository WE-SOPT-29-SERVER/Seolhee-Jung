// express 모듈 가져오기
const express = require("express");

// Router() 미들웨어 불러오기
const router = express.Router();

// GET method로 api/ 요청이 들어온다
router.get("/", (req,res) => {
    // 해당 로직을 실행
    const result = {
        status : 200,
        message: "api~~~!!",
    };
    res.status(200).send(result);
});

// 생성한 router 객체를 module로 변환
module.exports = router;