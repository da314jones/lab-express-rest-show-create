const models = require("../models/models");

const create = (req, res, next) => {
  const newLog = req.body;
  if (!newLog.captainName || !newLog.title || !newLog.post) {
    const error = new Error("Missing required fields");
    error.status = 400;
    return next(error);
  }
  newLog.id = models.length + 1;
  models.push(newLog);
  console.log("Added new log entry:", newLog);
  res.status(201).json(newLog);
};

module.exports = create;
