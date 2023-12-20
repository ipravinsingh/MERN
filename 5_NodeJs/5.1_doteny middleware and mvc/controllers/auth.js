/////////////// Without Database__
const log = require("../middlewares/Logger");
const users = require("../models/User");

const signupController = async (req, res) => {
  console.log("signupcontroller called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }
  const id = Math.floor(Math.random() * 1000);
  users.push({
    id,
    email,
    password,
  });

  res.status(200).json({
    id,
  });
  // res.send("signupcontroller called");
};
const loginController = async (req, res) => {
  console.log("logincontroller called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }

  const user = users.find((item) => item.email === email);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }

  res.status(200).json(user);
  // res.send("logincontroller called");
};
const getUserController = (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(403).send("User id is required");
    return;
  }
  const user = users.find((item) => item.id == id);
  res.status(200).json(user);
};

module.exports = {
  signupController,
  loginController,
  getUserController,
};

// //////////////// With mongoseDb database__
// const log = require("../middlewares/Logger");
// const user = require("../models/User");

// const signupController = async (req, res) => {
//   console.log("signupcontroller called");

//   const email = req.body.email;
//   const password = req.body.password;

//   if (!email || !password) {
//     res.status(403).send("Email and Password are required");
//     return;
//   }
//   const newUser = new User({ email, password });
//   await newUser.save();

//   res.status(200).json(newUser);
//   // res.send("signupcontroller called");
// };
// const loginController = async (req, res) => {
//   console.log("logincontroller called");

//   const email = req.body.email;
//   const password = req.body.password;

//   if (!email || !password) {
//     res.status(403).send("Email and Password are required");
//     return;
//   }

//   const user = users.find((item) => item.email === email);
//   if (!user) {
//     res.status(404).send("User not found");
//     return;
//   }
//   if (user.password !== password) {
//     res.status(401).send("Incorrect Password");
//     return;
//   }

//   res.status(200).json(user);
//   // res.send("logincontroller called");
// };
// const getUserController = (req, res) => {
//   const id = req.params.id;

//   if (!id) {
//     res.status(403).send("User id is required");
//     return;
//   }
//   const user = users.find((item) => item.id == id);
//   res.status(200).json(user);
// };

// module.exports = {
//   signupController,
//   loginController,
//   getUserController,
// };
