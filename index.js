const colors = require('colors');
colors.setTheme({
    info: 'bgGreen',
    help: 'cyan',
    warn: 'yellow',
    success: 'bgBlue',
    error: 'red',
    log: 'orange'
});

const express = require('express');
const app = require('./app');
const port = process.env.PORT | 5000;

/************************************** */
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})
app.listen(port, () => console.log(`Server has been started on ${port}`.success))