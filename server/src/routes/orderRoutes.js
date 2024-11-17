const express = require("express");
const router = express.Router();
const { sendOrder } = require("../controllers/orderController");

router.post("/send-order", sendOrder);

module.exports = router;
