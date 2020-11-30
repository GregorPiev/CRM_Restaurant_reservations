const express = require("express")
const router = express.Router()
const controllers = require("../controllers/position")

router.post("/getByCategoryId", controllers.getByCategoryId)
router.post("/remove", controllers.remove)
router.post("/update", controllers.update)
router.post("/create", controllers.create)

module.exports = router
