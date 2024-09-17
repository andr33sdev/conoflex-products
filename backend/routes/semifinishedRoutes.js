const express = require("express");
const router = express.Router();
const semifinishedController = require("../controllers/semifinishedController");

router.get("/", semifinishedController.getAllSemifinisheds);
router.get("/:code", semifinishedController.getSemifinishedById);
router.put("/:code", semifinishedController.updateSemifinishedById);

module.exports = router;