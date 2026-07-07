const express = require('express');
const router = express.Router()
const { activeUser,
    loginUser,
    registerUser } = require("../controllers/authControllers")

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/me" , activeUser)

module.exports = router