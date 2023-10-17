const models = require("../models/models");

const update = (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < models.length) {
        models[idx] = req.body;
        res.json(models[idx]);
    } else {
        res.status(404).json({ message: "Log not found" });
    }
};

module.exports = update;
