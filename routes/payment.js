const express = require('express');
const paymentRouter = express.Router();

const {
  list_all_transactions,
  list_one_transaction_details,
  inititate_transaction,
} = require('../controllers/paystack');

paymentRouter.get('/transactions', list_all_transactions);

paymentRouter.post('/transaction/:reference', list_one_transaction_details);

paymentRouter.post('/transaction/initialize', inititate_transaction);

module.exports = paymentRouter;
