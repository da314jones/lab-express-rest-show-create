const models = require("../models/models");

const deleteLog = (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < models.length) {
        const deletedLog = models.splice(idx, 1);
        res.json(deletedLog[0]);
    } else {
        res.status(404).json({ message: "Log not found" });
    }
};

module.exports = deleteLog;
