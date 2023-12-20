// //////////////////// Without using mongoDB database__
// const users = [
//   {
//     id: "123",
//     email: "praveen@gmail.com",
//     password: "1234",
//   },
//   {
//     id: "133",
//     email: "priyanshu@gmail.com",
//     password: "1234",
//   },
// ];

// module.exports = users;

////////////////// With using mongoDb database__
const mongoose = require("mongoose");

const userSchema = mongoose.userSchema(
  {
    email: {
      type: String,
      require: true,
    },
    password: String,
    marks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
