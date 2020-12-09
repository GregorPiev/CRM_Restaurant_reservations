const colors = require('colors');
colors.setTheme({
    info: 'bgGreen',
    help: 'cyan',
    warn: 'yellow',
    success: 'bgBlue',
    error: 'red',
    log: 'orange'
});

const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport") //Protection from unauthorized entry
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan") //Token
const keys = require("./config/keys")

const app = express()


const authRoutes = require("./routes/auth")
const analyticsRoutes = require("./routes/analytics")
const categoryRoutes = require("./routes/category")
const positionRoutes = require("./routes/position")
const orderRoutes = require("./routes/order")

app.use(passport.initialize());
require("./middleware/passport")(passport);


app.use(cors())
app.use(morgan("dev"))
app.use('/uploads', express.static('uploads')) //In order get direct access
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(keys.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('Successful connection to the database'.info))
    .catch((error) => console.log(`Failed on connection to database: ${error}`.error))

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/analytics", analyticsRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/position", positionRoutes)
app.use("/api/order", orderRoutes)

module.exports = app
