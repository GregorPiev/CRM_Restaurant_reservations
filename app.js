const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

const authRoutes = require("./routes/auth")
const analyticsRoutes = require("./routes/analytics")
const categoryRoutes = require("./routes/category")
const positionRoutes = require("./routes/position")
const orderRoutes = require("./routes/order")

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/auth", authRoutes)
app.use("/api/analytics", analyticsRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/position", positionRoutes)
app.use("/api/order", orderRoutes)

module.exports = app
