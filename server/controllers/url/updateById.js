const Url = require("../../models/url");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const updateById = async (req, res) => {
  const { urlId } = req.params;
  const { _id: owner } = req.user;
  const { url, utm } = req.body;

  const urlToUpdate = await Url.findOneAndUpdate(
    {
      $and: [{ _id: urlId, owner }],
    },
    { url, utm },
    { new: true }
  );

  if (!urlToUpdate) {
    throw HttpError(404, "Url not found");
  }

  await urlToUpdate.save();

  res.json(urlToUpdate);
};

module.exports = {
  updateById: ctrlWrapper(updateById),
};
