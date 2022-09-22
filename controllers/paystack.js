const axiosInstance = require('../utils/axiosInstance');

const { PAYMENT_PROVIDER_SECRET_KEY, PAYMENT_API_BASEURL } = process.env;

//lists all transactions details
const list_all_transactions = async (req, res, next) => {
  try {
    const response = await axiosInstance.get('/transaction');
    return res.send(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//lists details of one transaction by id
const list_one_transaction_details = async (req, res, next) => {
  const { reference } = req.params;

  try {
    const response = await axiosInstance.get(`/transaction/${reference}`);

    return res.send(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const inititate_transaction = async (req, res, next) => {
  const { amount, email } = req.body;

  //return if request does not contain required fields
  if (!email || !amount) {
    return res.status(400).send('Please provide an email and amount');
  }
  try {
    const response = await axiosInstance.post(
      '/transaction/initialize',
      req.body
    );

    return res.status(200).send(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  list_all_transactions,
  list_one_transaction_details,
  inititate_transaction,
};
