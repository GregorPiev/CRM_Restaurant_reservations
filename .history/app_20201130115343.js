const express = require("express")
const app = express()

const auth = require("./routes/auth")
const analytics = require("./routes/analytics")
const category = require("./routes/category")
const position = require("./routes/position")
const order = require("./routes/order")

app.use("/api/auth", auth)
app.use("/api/analytics", analytics)
app.use("/api/category", category)
app.use("/api/position", position)
app.use("/api/order", order)

module.exports = app
