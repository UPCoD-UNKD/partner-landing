const Url = require("../../models/url");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const getStats = async (req, res) => {
  const { _id: owner } = req.user;
  const { urlId } = req.params;

  const { stats } = await Url.findOne(
    {
      $and: [{ _id: urlId, owner }],
    },
    "-createdAt -updatedAt"
  );

  if (!stats) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ stats });
};

module.exports = {
  getStats: ctrlWrapper(getStats),
};
