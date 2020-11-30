const express = require("express")
const router = express.Router()
const controllers = require("../controllers/position")

router.get("/:categoryId", controllers.getByCategoryId)
router.delete("/:id", controllers.remove)
router.patch("/:id", controllers.update)
router.post("/", controllers.create)

module.exports = router
