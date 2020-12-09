const express = require("express")
const router = express.Router()
const controllers = require("../controllers/order")
const passport = require('passport');

router.get("/", passport.authenticate('jwt', { session: false }), controllers.getAll)
router.post("/", passport.authenticate('jwt', { session: false }), controllers.create)

module.exports = router
