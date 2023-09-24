const Url = require("../../models/url");
const { perPage } = require("../../constants/constants");
const { ctrlWrapper } = require("../../decorators");

const getAll = async (req, res) => {
  const { page = 1, limit = perPage } = req.query;
  const skip = (page - 1) * limit;

  const total = await Url.countDocuments();

  const totalPages = Math.ceil(total / perPage);

  const result = await Url.find(req.query, "-updatedAt", { skip, limit }).sort({
    createdAt: -1,
  });

  res.status(200).json({ page, perPage, totalPages, urls: result });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
