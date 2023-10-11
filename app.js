const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`This is your server running here.`);
});

module.exports = app 