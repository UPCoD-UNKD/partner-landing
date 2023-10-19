const Url = require("../../models/url");
const { perPage } = require("../../constants/constants");
const { ctrlWrapper } = require("../../decorators");

const getAllOwner = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = perPage } = req.query;
  const skip = (page - 1) * limit;

  const total = await Url.countDocuments({ owner });

  const totalPages = Math.ceil(total / perPage);

  const result = await Url.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).sort({ createdAt: -1 });

  res.status(200).json({ page, perPage, totalPages, urls: result });
};

module.exports = {
  getAllOwner: ctrlWrapper(getAllOwner),
};
