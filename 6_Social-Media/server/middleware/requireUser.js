// // Lec_1
// const jwt = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   //   console.log("I m inside middleware");
//   if (
//     !req.headers ||
//     !req.headers.authorization ||
//     !req.headers.authorization.startsWith("Bearer")
//   ) {
//     return res.status(401).send("Authorization header is required");
//   }
//   const accessToken = req.headers.authorization.split(" ")[1];
//   console.log(accessToken);
//   try {
//     const decoded = jwt.verify(
//       accessToken,
//       process.env.ACCESS_TOKEN_PRIVATE_KEY
//     );
//     req._id = decoded._id;
//     next();
//   } catch (e) {
//     console.log(e);
//     return res.status(401).send("Invalid access key");
//   }
// };

// // Lec_2,3
// const jwt = require("jsonwebtoken");
// const { error } = require("../utils/responseWrapper");

// module.exports = async (req, res, next) => {
//   //   console.log("I m inside middleware");
//   if (
//     !req.headers ||
//     !req.headers.authorization ||
//     !req.headers.authorization.startsWith("Bearer")
//   ) {
//     return res.send(error(401, "Authorization header is required"));
//   }
//   const accessToken = req.headers.authorization.split(" ")[1];
//   //   console.log(accessToken);
//   try {
//     const decoded = jwt.verify(
//       accessToken,
//       process.env.ACCESS_TOKEN_PRIVATE_KEY
//     );
//     req._id = decoded._id;
//     next();
//   } catch (e) {
//     console.log(e);
//     return res.send(error(401, "Invalid access key"));
//   }
// };

// Lec_4
const jwt = require("jsonwebtoken");
const { error } = require("../utils/responseWrapper");
const User = require('../models/User')

module.exports = async (req, res, next) => {
  //   console.log("I m inside middleware");
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.send(error(401, "Authorization header is required"));
  }
  const accessToken = req.headers.authorization.split(" ")[1];
  //   console.log(accessToken);
  try {
    const decoded = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_PRIVATE_KEY
    );
    req._id = decoded._id;

    const user = await User.findById(req._id);
    if (!user) {
      return res.send(error(404, "User not found"));
    }

    next();
  } catch (e) {
    console.log(e);
    return res.send(error(401, "Invalid access key"));
  }
};