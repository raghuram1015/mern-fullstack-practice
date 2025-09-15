const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res
    .status(200)
    .send("Hello World, this is with route");
});

router.route("/register").get((req, res) => {
    res
    .status(200)
    .send("Welcome to the Registration Page, this is with route");
})

module.exports = router;