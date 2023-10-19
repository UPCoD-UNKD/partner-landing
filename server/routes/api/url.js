const express = require("express");

const {
  getAll,
  getById,
  add,
  deleteById,
  getAllOwner,
  updateById,
  getStats,
  clickUrl,
} = require("../../controllers/url");
const { validateBody } = require("../../decorators");
const { unauthorized } = require("../../middlewares");
const isValidId = require("../../middlewares/isValidId");
const checkJwt = require("../../utils/checkJwt");
const { urlAddSchema, statsSchema } = require("../../schemas/url");

const router = express.Router();

router.get("/", getAll);

router.get("/stats/:urlId", checkJwt, unauthorized, isValidId, getStats);

router.patch("/stats/:urlId", isValidId, validateBody(statsSchema), clickUrl);

router.get("/owner", checkJwt, unauthorized, getAllOwner);

router.get("/:urlId", checkJwt, unauthorized, isValidId, getById);

router.post("/add", checkJwt, unauthorized, validateBody(urlAddSchema), add);

router.patch(
  "/update/:urlId",
  checkJwt,
  unauthorized,
  isValidId,
  validateBody(urlAddSchema),
  updateById
);

router.delete("/delete/:urlId", checkJwt, unauthorized, isValidId, deleteById);

module.exports = router;
