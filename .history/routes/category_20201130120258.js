const express = require("express")
const router = express.Router()
const controllers = require("../controllers/category")

router.get("/", controllers.getAll)
router.get("/:id", controllers.getById)
router.post("/", controllers.create)
router.delete("/remove", controllers.remove)
router.patch("/update", controllers.update)

module.exports = router
