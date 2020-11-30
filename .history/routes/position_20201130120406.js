const express = require("express")
const router = express.Router()
const controllers = require("../controllers/position")

router.get("/:id", controllers.getByCategoryId)
router.delete("/", controllers.remove)
router.patch("/", controllers.update)
router.post("/", controllers.create)

module.exports = router
