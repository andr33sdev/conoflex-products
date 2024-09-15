const express = require("express");
const router = express.Router();
const semifinishedController = require("../controllers/semifinishedController");

router.get("/", semifinishedController.getAllSemifinisheds);

module.exports = router;