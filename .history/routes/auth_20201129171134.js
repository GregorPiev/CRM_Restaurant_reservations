const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
    const { login, password } = req.body;
    try {
        res.status(200).json({ message: 'Success' });
    } catch (err) {
        console.log('Server Error:', err.message);
        res.status(500).json({ message: 'Error' });
    }
})


module.exports = router;