const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
// CONTROLLERS
const homePage = require('./controllers/homepage');
const ordersPage = require('./controllers/orderspage');
const {
  adminOrderPage,
  adminUpdateOrderPage,
} = require('./controllers/adminPage');

// Connecting to MongoDB

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((result) =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Connected to DB and server is running on ${process.env.PORT}`
      )
    )
  );

// HOMEPAGE
app.get('/api/portfolio/', homePage);

// POST ROUTE FOR TABLE ORDERS
app.post('/api/orders/', ordersPage);

// ADMIN ROUTE TO SEE ORDERS
app.get('/api/orders/', adminOrderPage);

// UPDATE ORDERS VIA ADMING PAGE
app.put('/api/orders/:id', adminUpdateOrderPage);
