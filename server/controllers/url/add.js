const Url = require("../../models/url");
const { ctrlWrapper } = require("../../decorators");

const add = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Url.create({
    ...req.body,
    owner,
  });

  const response = result.toObject();

  res.status(201).json(response);
};

module.exports = {
  add: ctrlWrapper(add),
};
