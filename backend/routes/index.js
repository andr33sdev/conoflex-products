const express = require("express");
const router = express.Router();

const semifinishedRoutes = require("./semifinishedRoutes");
const rawMaterialRoutes = require("./rawMaterialRoutes");
const productionRoutes = require("./productionRoutes");

// Usa el enrutador de semi elaborado
router.use("/api/semifinished", semifinishedRoutes);

// Usa el enrutador de materia prima
router.use("/api/raw-material", rawMaterialRoutes);

// Usa el enrutador de producciones
router.use("/api/productions", productionRoutes);

module.exports = router;