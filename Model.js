const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  riskScore: {
    type: Number,
    default: 0,
  },
  nigerianStock: {
    type: Number,
    default: 0,
  },
  foreignStock: {
    type: Number,
    default: 0,
  },
  techStock: {
    type: Number,
    default: 0,
  },
  emergingStock: {
    type: Number,
    default: 0,
  },
  nigerianBond: {
    type: Number,
    default: 0,
  },
  foreignBond: {
    type: Number,
    default: 0,
  },
  commodiy: {
    type: Number,
    default: 0,
  },
  realEstate: {
    type: Number,
    default: 0,
  },
  tBills: {
    type: Number,
    default: 0,
  },
  alternative: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
