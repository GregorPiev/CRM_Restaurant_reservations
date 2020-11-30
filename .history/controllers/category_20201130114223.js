module.exports.category = function (req, res) {
    res.status(200).json({ login: 'From controller' });

}

module.exports.register = function (req, res) {
    res.status(200).json({ register: 'From controller' });
}

