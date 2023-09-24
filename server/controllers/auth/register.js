const User = require("../../models/user");
const { HttpError } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const register = async (req, res) => {
  const { email } = req.body;

  const token = req.headers.authorization.split(" ")[1];

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = await User.create(req.body);

  const { _id: id } = newUser;

  await User.findByIdAndUpdate(id, { token, newUser });

  res.status(201).json({
    token,
    user: {
      _id: id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
