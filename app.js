const express = require("express");
const models = require("./models/models");
const createLog = require("./controllers/logs/create");
const readLog = require("./controllers/logs/read");
const updateLog = require("./controllers/logs/update");
const deleteLog = require("./controllers/logs/delete");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Welcome to The Captains Log.`);
});

// Index route shows all indices of a particular resource
app.get("/logs", (req, res) => {
    res.json(models);
});

// Show route for a single entry point based on a wildcard ("/prefix/:('user-Defined-variable')") identifier
app.get("/logs/:index", readLog);

// Create route
app.post("/logs", createLog);

// Update route
app.put("/logs/:index", updateLog);

// Delete route
app.delete("/logs/:index", deleteLog);

// Middleware error handling always at the bottom of the stack
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Sumting BreK!`);
});

module.exports = app;
