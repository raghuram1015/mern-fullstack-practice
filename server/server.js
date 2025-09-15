const express = require("express");
const app = express();
const router = require("./route/auth-route");

app.use("/", router);

app.get("/trial",(req, res) => {
    res
    .status(200)
    .send("Hello World");
});

app.get("/register",(req, res) => {
    res
    .status(200)
    .send("Welcome to Registration Page");
});

const PORT = 5000;
app.listen(PORT, () => {
    console
    .log(`server is running at port: ${PORT}`);
});