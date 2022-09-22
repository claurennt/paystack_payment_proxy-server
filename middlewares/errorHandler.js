/* create custom error handling middleware  */
const errorHandler = (err, req, res, next) => {
  /* console.log what was the actual error */

  console.log(err.stack);
  /*send a response with the error message*/
  return res.status(500).send(err);
};

module.exports = errorHandler;
