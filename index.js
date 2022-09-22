require('dotenv').config();
const express = require('express');

const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const paymentRouter = require('./routes/payment');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/payment', paymentRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
