const axios = require("axios");

const { HttpError } = require("../helpers");
const User = require("../models/user");

const unauthorized = async (req, res, next) => {
  const [bearer, token] = req.headers.authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }

  try {
    const response = await axios.get(`${req.auth.aud[1]}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userEmail = response.data.email;

    const user = await User.findOne({ email: userEmail });

    if (user) {
      req.user = user;

      next();
    } else {
      next(HttpError(401, "Unauthorized"));
    }
  } catch (error) {
    next(HttpError(401, "This token is invalid"));
  }
};

module.exports = unauthorized;
