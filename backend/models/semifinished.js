const mongoose = require("mongoose");

const semifinishedSchema = new mongoose.Schema({
    code: { type: String, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    stock: { type: Number, required: false },
    min_stock: { type: Number, required: false },
    color: { type: String, required: false },
    process: { type: String, required: false },
    location: { type: String, required: false },
    materials: { type: Array, required: false },
});

module.exports = mongoose.model("Semifinished", semifinishedSchema);