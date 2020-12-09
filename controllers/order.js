const errorHandler = require('../utils/errorHandler')
const Orders = require('../models/Order');


//(Get) localhost:5000/api/order?offset=2&limit=5
module.exports.getAll = async function (req, res) {
	const query = {
		user: req.user.id
	};

	if (req.query.start) {
		query.date = {
			$gte: req.query.start
		}
	}

	if (req.query.end) {
		if (!query.date) {
			query.date = {};
		}
		query.date['$lte'] = req.query.end;
	}


	if (req.query.order) {
		query.order = +req.query.order;
	}

	try {
		const orders = await Orders
			.find(query)
			.sort({ date: -1 })
			.skip(+req.query.offset) //custom to Number
			.limit(+req.query.limit) //custom to Number

		req.status(200).json(orders)
	} catch (e) {
		errorHandler(res, e)
	}
}
module.exports.create = async function (req, res) {

	try {
		const lastOrder = await Orders
			.findOne({ user: req.user.id })
			.sort({ date: -1 });

		const maxOrder = lastOrder ? lastOrder.order : 0;

		const order = await new Orders({
			list: req.body.list,
			user: req.user.id,
			order: maxOrder + 1
		}).save()
		res.status(201).json(order)
	} catch (e) {
		errorHandler(res, e)
	}
}
