const express = require('express');
const router = express.Router();

// user/signup
router.use("/signup", require('./userSignupPOST'));
router.use("/delete", require('./userDeleteDELTE'));
router.use("/update", require('./userUpdatePUT'));
router.use("/login", require('./userLoginPOST'));
module.exports = router;