const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
// const {home, register} = require("../controllers/auth-controller");
// const {register} = require("../controllers/auth-controllers");

router.route("/").get(authcontrollers.home);
router.route("/register").get(authcontrollers.register);

module.exports = router;