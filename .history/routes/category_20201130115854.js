const express = require("express")
const router = express.Router()
const controllers = require("../controllers/category")

router.post("/getAll", controllers.getAll)
router.post("/getById", controllers.getById)
router.post("/create", controllers.create)
router.post("/remove", controllers.remove)
router.post("/update", controllers.update)

module.exports = router
