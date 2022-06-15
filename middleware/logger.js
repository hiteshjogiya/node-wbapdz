const loggermiddleware = (req, res, next) => {
  console.log(`logged ${req.url} ${req.method}--${new Date()}`);
  next();
};
module.exports = loggermiddleware;
