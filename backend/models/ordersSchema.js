const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNr: {
      type: String,
      required: true,
    },
    tableDesc: {
      tableType: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      dimensions: {
        type: String,
        required: true,
      },
      wood: {
        type: String,
        required: true,
      },
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
