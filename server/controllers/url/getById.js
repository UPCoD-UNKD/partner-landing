const Url = require("../../models/url");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const getById = async (req, res) => {
  const { urlId } = req.params;

  const result = await Url.findOne(
    { _id: urlId },
    "-createdAt -updatedAt"
  ).populate("owner", "name email");

  if (!result) {
    throw HttpError(404, "Url not found");
  }

  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
