const colors = require('colors');
colors.setTheme({
	info: 'bgGreen',
	help: 'cyan',
	warn: 'yellow',
	success: 'bgBlue',
	error: 'red',
	log: 'orange'
});

const Categories = require('../models/Category');
const Position = require('../models/Positions');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
	console.log('categories getAll'.warn)
	console.log('User Id:', req.user.id);
	console.log('Caregory:', Categories);
	try {
		const categoriess = await Categories.find({ user: req.user.id })
		console.log('categories:', categoriess)
		res.status(200).json(categoriess)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.getById = async function (req, res) {
	console.log('categories getById'.warn);
	try {
		const category = await Caregory.findById(req.params.id)
		res.status(200).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.remove = async function (req, res) {
	try {
		await Category.remove({ _id: req.params.id })
		await Position.remove({ category: req.params.id })

		res.status(200).json('Category was deleted')
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.create = async function (req, res) {
	console.log("Create user:".help)
	console.log(req.user)
	const category = new Category({
		name: req.body.name,
		user: req.user._id,
		imageSrc: req.file ? req.file.path : '',
	})
	try {
		await category.save();
		res.status(201).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.update = async function (req, res) {
	const updated = {
		name: req.body.name
	}
	if (req.file) {
		updated.imageSrc = req.file.path
	}
	try {
		const category = await Category.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: updated },
			{ new: true }
		)
		res.status(200).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}
