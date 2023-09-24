const express = require("express");

const {
  getAll,
  getById,
  add,
  deleteById,
  getAllOwner,
  updateById,
} = require("../../controllers/url");
const { validateBody } = require("../../decorators");
const { unauthorized } = require("../../middlewares");
const isValidId = require("../../middlewares/isValidId");
const checkJwt = require("../../utils/checkJwt");
const urlSchema = require("../../schemas/url");

const router = express.Router();

router.get("/", getAll);

router.get("/owner", checkJwt, unauthorized, getAllOwner);

router.get("/:urlId", isValidId, getById);

router.post("/add", checkJwt, unauthorized, validateBody(urlSchema), add);

router.patch(
  "/update/:urlId",
  checkJwt,
  unauthorized,
  isValidId,
  validateBody(urlSchema),
  updateById
);

router.delete("/delete/:urlId", checkJwt, unauthorized, isValidId, deleteById);

module.exports = router;
