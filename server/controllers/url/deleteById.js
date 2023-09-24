const Url = require("../../models/url");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const deleteById = async (req, res) => {
  const { urlId } = req.params;
  const { _id: owner } = req.user;

  const result = await Url.findOneAndRemove({
    $and: [{ _id: urlId }, { owner }],
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Url deleted",
    deletedUrlId: urlId,
  });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
