const Portfolio = require('../models/portfolioSchema');

const homePage = (req, res) => {
  Portfolio.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = homePage;
