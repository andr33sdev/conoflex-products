const Production = require("../models/Production");

// Obtener todos los semi elaborados
exports.getAllProductions = async (req, res) => {
    try {
      const productions = await Production.find().sort({ date: -1});;
      res.status(200).json(productions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Crear una nueva producción
exports.createProduction = async (req, res) => {
  try {
    const newProduction = new Production({
      date: req.body.date,
      operator: req.body.operator,
      approvedQty: req.body.approvedQty,
      disapprovedQty: req.body.disapprovedQty,
      color: req.body.color,
      process: req.body.process,
      location: req.body.location,
      productCode: req.body.productCode,
      productId: req.body.productId,
      materials: req.body.materials,
    });

    const savedProduction = await newProduction.save();
    res.status(201).json(savedProduction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};