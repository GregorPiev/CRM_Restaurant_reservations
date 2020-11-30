const express = require("express")
const app = express()

const authRoutes = require("./routes/auth")
const analyticsRoutes = require("./routes/analytics")
const categoryRoutes = require("./routes/category")
const positionRoutes = require("./routes/position")
const orderRoutes = require("./routes/order")

app.use("/api/auth", authRoutes)
app.use("/api/analytics", analyticsRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/position", positionRoutes)
app.use("/api/order", orderRoutes)

module.exports = app
