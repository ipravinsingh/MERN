const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  likeCount: Number,
  user: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("post", postSchema);
