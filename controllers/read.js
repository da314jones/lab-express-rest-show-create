const models = require("../models/models");

const read = ("/logs/:index", (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < models.length) {
        res.json(models[idx]);
    } else {
        res.status(404).json({ message: "Log not found" });
    }
});

module.exports = read;
