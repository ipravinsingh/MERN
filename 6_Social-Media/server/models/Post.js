// Lec_3
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  image: {
    publicId: String,
    url: String,
  },
  caption: {
    type: String,
    require: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
