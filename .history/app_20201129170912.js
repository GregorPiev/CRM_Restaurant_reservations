const express = require('express');
const app = express();

const authRouter = require('./routes/auth');


app.use('/api/login', authRouter);

module.exports = app;