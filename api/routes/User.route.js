const express = require("express");
const router = express.Router();
const User = require ('../controllers/userController.js');

router.get('/', User)

module.exports = router