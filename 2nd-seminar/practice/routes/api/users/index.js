// api/users/index.js

const express = require("express");
const router = express.Router();

router.get("/login", (req,res) => {
    const result = {
        status : 200,
        message: "api/users/login",
    };
    res.status(200).send(result);
});

router.post("/signup", (req,res) => {
    const result = {
        status : 200,
        message: "api/users/signup",
    };
    res.status(200).send(result);
});

module.exports = router;