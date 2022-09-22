const axios = require('axios');
const { PAYMENT_PROVIDER_SECRET_KEY, PAYMENT_API_BASEURL } = process.env;

const axiosInstance = axios.create({
  baseURL: PAYMENT_API_BASEURL,
  timeout: 1000,
  headers: { Authorization: PAYMENT_PROVIDER_SECRET_KEY },
});

module.exports = axiosInstance;
