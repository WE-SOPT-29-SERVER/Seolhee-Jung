// api/blog/index.js

const express = require("express");
const router = express.Router();

router.get("/post", (req,res) => {
    const result = {
        status : 200,
        message: "api/blogs/post",
    };
    res.status(200).send(result);
});


module.exports = router;