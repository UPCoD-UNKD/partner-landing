const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const urlSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    stats: [
      {
        date: { type: Date, required: true },
        ip: { type: String, required: true },
        browser: { type: String, required: true },
      },
    ],
    utm: {
      type: Schema.Types.Mixed,
      required: false,
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
