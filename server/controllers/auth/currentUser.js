const { ctrlWrapper } = require("../../decorators");

const currentUser = async (req, res) => {
  const { _id, name, email } = req.user;

  res.json({
    _id,
    name,
    email,
  });
};

module.exports = {
  currentUser: ctrlWrapper(currentUser),
};
