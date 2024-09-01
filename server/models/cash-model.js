// models/CashInFlow.js
const mongoose = require('mongoose');

const cashInFlowSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  empname: {
    type: String,
    required: true,
  },
  cashDeclaration: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  cashInflow: {
    type: String,
    required: true,
  },
  uniform: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  idCard: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
});

const CashInFlow = mongoose.model('CashInFlow', cashInFlowSchema);

module.exports = CashInFlow;