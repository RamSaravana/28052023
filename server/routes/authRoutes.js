const { saveCreds } = require("../controller/authController");

const router = require("express").Router();

router.post("/", saveCreds);

module.exports = router;
