var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// api(폴더)의 **index.js**에 접근
router.use("/api", require("./api"));

// blog.js(파일)에 접근
router.usee("/blog", require("./blog"));


// 폴더일 경우, 그 폴더에 들어있는 index.js 를 import 한다
// 파일일 경우, 해당 파일을 import함


module.exports = router;
