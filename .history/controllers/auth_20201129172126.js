module.exports.login = function (req, res) {
    // const { login, password } = req.body;
    try {
        res.status(200).json({ login: 'From controller' });
    } catch (err) {
        console.log('Server Error:', err.message);
        res.status(500).json({ message: 'Error' });
    }
}

module.exports.register = function (req, res) {
    res.status(200).json({ register: 'From controller' });
}

