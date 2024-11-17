const express = require("express");
const router = express.Router();
const { subscribe } = require("../controllers/newsletterController");

router.post("/newsletter", subscribe);

module.exports = router;
