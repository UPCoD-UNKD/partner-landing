const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const urlSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

urlSchema.post("save", handleMongooseError);

const Url = model("url", urlSchema);

module.exports = Url;
