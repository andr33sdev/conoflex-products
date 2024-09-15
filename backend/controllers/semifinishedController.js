const Semifinished = require("../models/Semifinished");

// Obtener todos los semi elaborados
exports.getAllSemifinisheds = async (req, res) => {
    try {
      const semifinisheds = await Semifinished.find();
      res.status(200).json(semifinisheds);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  