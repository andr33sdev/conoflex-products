const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema({
    date: { type: String, required: false },
    operator: { type: String, required: false },
    approvedQty: { type: Number, required: false },
    disapprovedQty: { type: Number, required: false },
    productId: { type: String, required: false },
    productCode: { type: String, required: false },
    color: { type: String, required: false },
    process: { type: String, required: false },
    location: { type: String, required: false },
    materials: { type: Array, required: false },
});

module.exports = mongoose.model("Production", productionSchema);