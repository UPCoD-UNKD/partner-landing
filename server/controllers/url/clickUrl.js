const Url = require("../../models/url");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const clickUrl = async (req, res) => {
  const { urlId } = req.params;
  const { date, ip, browser } = req.body;

  const newStat = {
    date,
    ip,
    browser,
  };

  const { stats } = await Url.findOneAndUpdate(
    { _id: urlId },
    { $push: { stats: newStat } },
    { new: true }
  );

  if (!stats) {
    throw HttpError(404, "Url not found");
  }

  res.status(200).json({ stats });
};

module.exports = {
  clickUrl: ctrlWrapper(clickUrl),
};
