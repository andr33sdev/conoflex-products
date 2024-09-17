const RawMaterial = require("../models/RawMaterial");

// Obtener todas las materias primas
exports.getAllRawMaterials = async (req, res) => {
  try {
    const rawMaterials = await RawMaterial.find();
    res.status(200).json(rawMaterials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una materia prima por ID
exports.getRawMaterialById = async (req, res) => {
  try {
    const rawMaterial = await RawMaterial.findById(req.params.id);
    if (rawMaterial) {
      res.status(200).json(rawMaterial);
    } else {
      res.status(404).json({ message: "Materia Prima no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una materia prima por ID
exports.getRawMaterialById = async (req, res) => {
  try {
    const rawMaterial = await RawMaterial.findById(req.params.id);
    if (rawMaterial) {
      res.status(200).json(rawMaterial);
    } else {
      res.status(404).json({ message: "Materia Prima no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};