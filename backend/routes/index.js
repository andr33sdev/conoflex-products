const express = require("express");
const router = express.Router();

const semifinishedRoutes = require("./semifinishedRoutes");

// Usa el enrutador de semi elaborado
router.use("/api/semifinished", semifinishedRoutes);

module.exports = router;