const User = require("../../models/user");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const login = async (req, res) => {
  const { email } = req.body;

  const token = req.headers.authorization.split(" ")[1];

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email is wrong");
  }

  const { _id: id } = user;

  await User.findByIdAndUpdate(id, { token, user });

  res.json({
    token,
    user: {
      _id: id,
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = {
  login: ctrlWrapper(login),
};
