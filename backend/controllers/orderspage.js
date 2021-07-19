const Order = require('../models/ordersSchema');

const ordersPage = (req, res) => {
  if (!req.body) return res.status(400).send({ message: 'error' });

  let order = new Order(req.body);

  order.save().then((result) => {
    res.json({ message: 'Data sent' });
  });
};

module.exports = ordersPage;
