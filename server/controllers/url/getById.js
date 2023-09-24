const Url = require("../../models/url");

const { ctrlWrapper } = require("../../decorators");

const getById = async (req, res) => {
  const { urlId } = req.params;

  const result = await Url.findOne({ _id: urlId }, "-updatedAt").populate(
    "owner",
    "name email"
  );

  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
