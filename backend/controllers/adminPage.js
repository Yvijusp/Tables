const Order = require('../models/ordersSchema');

const adminOrderPage = (req, res) => {
  Order.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const adminUpdateOrderPage = (req, res) => {
  if (!req.body) return res.status(400).send({ message: 'Error' });

  let id = req.params.id;

  Order.findByIdAndUpdate(id, req.body).then((result) =>
    res.json({ message: 'Successfully updated', result })
  );
};

module.exports = { adminOrderPage, adminUpdateOrderPage };
