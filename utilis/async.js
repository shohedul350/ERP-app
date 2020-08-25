const asyncHandler =
(fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
module.exports = asyncHandler;
