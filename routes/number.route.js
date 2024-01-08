const express = require("express");
const router = express.Router();
const numberController = require("../controllers/number.controller");

router.get("/", numberController.getAllNumbers);
router.post("/add", numberController.addNumber);
router.get("/check/:number", numberController.checkNumber);

module.exports = router;
