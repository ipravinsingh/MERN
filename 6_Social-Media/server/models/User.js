// // Lec_1,2
// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
// module.exports = mongoose.model("user", userSchema);

// // Lec_3,4,5
// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     select: false,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   avator: {
//     publicId: String,
//     url: String,
//   },
//   followers: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//     },
//   ],
//   followings: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//     },
//   ],
//   posts: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "post",
//     },
//   ],
// });

// module.exports = mongoose.model("user", userSchema);

// Lec_6
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    avatar: {
      publicId: String,
      url: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    followings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
