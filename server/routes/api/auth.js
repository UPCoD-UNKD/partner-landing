const express = require("express");

const {
  register,
  login,
  logout,
  currentUser,
} = require("../../controllers/auth");
const { validateBody } = require("../../decorators");
const { unauthorized } = require("../../middlewares");
const { userRegisterSchema, userLoginSchema } = require("../../schemas/users");
const checkJwt = require("../../utils/checkJwt");

const router = express.Router();

router.post("/register", validateBody(userRegisterSchema), register);

router.post("/login", validateBody(userLoginSchema), login);

router.post("/logout", checkJwt, unauthorized, logout);

router.get("/current", checkJwt, unauthorized, currentUser);

module.exports = router;
