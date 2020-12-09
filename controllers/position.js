const Positions = require('../models/Positions');
const Postion = require('../models/Positions')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function (req, res) {
	try {
		const position = await Postion.find({
			category: req.params.categoryId,
			user: req.user.id
		})
		res.status(200).json(position);
	} catch (e) {
		errorHandler(res, e)
	}

}
module.exports.create = async function (req, res) {
	try {
		const postion = await new Positions({
			name: req.body.name,
			cost: req.body.cost,
			category: req.body.category,
			user: req.user.id
		}).save();
		res.status(201).json(position)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.update = async function (req, res) {
	try {
		const position = await Postion.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: req.body },
			{ new: true }
		)
		res.status(200).json(position)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.remove = async function (req, res) {
	try {
		await Postion.remove({ id: req.body.id })
		res.status(200).json({ message: 'Position was deleted' });
	} catch (e) {
		errorHandler(res, e)
	}
}
