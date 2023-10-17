const models = require("../models/models");

const read = ("/:index", (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx >= 0 && idx < models.length) {
        res.json(models[idx]);
    } else {
        res.redirect(404).json({ message: "Log not found" });
    }
});

module.exports = read;
