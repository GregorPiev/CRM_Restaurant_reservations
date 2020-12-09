const express = require("express")
const router = express.Router()
const controllers = require("../controllers/position")
const passport = require('passport');

router.get("/:categoryId", passport.authenticate('jwt', { session: false }), controllers.getByCategoryId)
router.delete("/:id", passport.authenticate('jwt', { session: false }), controllers.remove)
router.patch("/:id", passport.authenticate('jwt', { session: false }), controllers.update)
router.post("/", passport.authenticate('jwt', { session: false }), controllers.create)

module.exports = router
