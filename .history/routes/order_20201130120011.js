const express = require("express")
const router = express.Router()
const controllers = require("../controllers/order")

router.post("/getAll", controllers.getAll)
router.post("/register", controllers.create)

module.exports = router
