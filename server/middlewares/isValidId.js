const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { urlId } = req.params;

  if (!isValidObjectId(urlId)) {
    next(HttpError(400, `${urlId} is not valid id`));
  }

  next();
};

module.exports = isValidId;
