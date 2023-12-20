// // Lec_1
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const signupController = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).send("All fields are required");
//     }
//     const oldUser = await User.findOne({ email });
//     if (oldUser) {
//       return res.status(409).send("User is already registered");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashedPassword,
//     });

//     return res.status(201).json({
//       user,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).send("All fields are required");
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).send("User is not registered");
//     }
//     const matched = await bcrypt.compare(password, user.password);

//     if (!matched) {
//       return res.status(403).send("Incorrect password");
//     }
//     // return res.json({ user }); // we are getting email and password.
//     // const accessToken = generateAccessToken({ user }); // we are getting full user encoded data.

//     const accessToken = generateAccessToken({
//       _id: user._id,
//     });
//     const refreshToken = generateRefreshToken({
//       _id: user._id,
//     });

//     return res.json({ accessToken, refreshToken });
//   } catch (e) {
//     console.log(e);
//   }
// };

// //this api will chect the refreshToken validity and generate a new access token.
// const refreshAccessTokenController = async (req, res) => {
//   const { refreshToken } = req.body;

//   if (!refreshToken) {
//     return res.status(401).send("Refresh token is required");
//   }
//   try {
//     const decoded = jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_PRIVATE_KEY
//     );

//     const _id = decoded._id;
//     const accessToken = generateAccessToken({ _id });

//     return res.status(201).json({ accessToken });
//   } catch (e) {
//     console.log(e);
//     return res.status(401).send("Invalid refresh token");
//   }
// };

// //internal functions
// const generateAccessToken = (data) => {
//   try {
//     const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
//       expiresIn: "2d",
//     });
//     console.log(token);
//     return token;
//   } catch (e) {
//     console.log(e);
//   }
// };
// const generateRefreshToken = (data) => {
//   try {
//     const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
//       expiresIn: "1y",
//     });
//     console.log(token);
//     return token;
//   } catch (e) {
//     console.log(e);
//   }
// };

// module.exports = {
//   signupController,
//   loginController,
//   refreshAccessTokenController,
// };

// // Lec_2
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { error, success } = require("../utils/responseWrapper");

// const signupController = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.send(error(400, "All fields are required"));
//     }
//     const oldUser = await User.findOne({ email });
//     if (oldUser) {
//       return res.send(error(409, "User is already registered"));
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashedPassword,
//     });

//     return res.send(
//       success(201, {
//         user,
//       })
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };

// const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.send(error(401, "All fields are required"));
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.send(error(404, "User is not registered"));
//     }
//     const matched = await bcrypt.compare(password, user.password);

//     if (!matched) {
//       return res.send(error(403, "Incorrect password"));
//     }
//     // return res.json({ user }); // we are getting email and password.
//     // const accessToken = generateAccessToken({ user }); // we are getting full user encoded data.

//     const accessToken = generateAccessToken({
//       _id: user._id,
//     });
//     const refreshToken = generateRefreshToken({
//       _id: user._id,
//     });

//     // Here jwt is the name of the cookie we can also give some another name and we store refreshToken in jwt cookie.
//     res.cookie("jwt", refreshToken, {
//       httpOnly: true,
//       secure: true,
//     });

//     return res.send(success(200, { accessToken }));
//   } catch (e) {
//     console.log(e);
//   }
// };

// //this api will chect the refreshToken validity and generate a new access token.
// const refreshAccessTokenController = async (req, res) => {
//   const cookies = req.cookies;
//   if (!cookies.jwt) {
//     return res.send(error(401, "Refresh token in cookie is required"));
//   }
//   const refreshToken = cookies.jwt;

//   // console.log("refresh", refreshToken);

//   try {
//     const decoded = jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_PRIVATE_KEY
//     );

//     const _id = decoded._id;
//     const accessToken = generateAccessToken({ _id });
//     return res.send(success(201, { accessToken }));
//   } catch (e) {
//     console.log(e);
//     return res.send(error(401, "Invalid refresh token"));
//   }
// };

// //internal functions
// const generateAccessToken = (data) => {
//   try {
//     const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
//       expiresIn: "1d",
//     });
//     console.log(token);
//     return token;
//   } catch (e) {
//     console.log(e);
//   }
// };
// const generateRefreshToken = (data) => {
//   try {
//     const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
//       expiresIn: "1y",
//     });
//     console.log(token);
//     return token;
//   } catch (e) {
//     console.log(e);
//   }
// };

// module.exports = {
//   signupController,
//   loginController,
//   refreshAccessTokenController,
// };

// Lec_3
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error, success } = require("../utils/responseWrapper");

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.send(error(400, "All fields are required"));
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send(error(409, "User is already registered"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // return res.send(success(201, user));
    return res.send(success(201, "user created successfully"));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send(error(400, "All fields are required"));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.send(error(404, "User is not registered"));
    }
    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      return res.send(error(403, "Incorrect password"));
    }
    // return res.json({ user }); // we are getting email and password.
    // const accessToken = generateAccessToken({ user }); // we are getting full user encoded data.

    const accessToken = generateAccessToken({
      _id: user._id,
    });
    const refreshToken = generateRefreshToken({
      _id: user._id,
    });

    // Here jwt is the name of the cookie we can also give some another name.
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return res.send(success(200, { accessToken }));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

//this api will chect the refreshToken validity and generate a new access token.
const refreshAccessTokenController = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) {
    return res.send(error(401, "Refresh token in cookie is required"));
  }
  const refreshToken = cookies.jwt;

  console.log("refresh", refreshToken);

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_PRIVATE_KEY
    );

    const _id = decoded._id;
    const accessToken = generateAccessToken({ _id });
    return res.send(success(201, { accessToken }));
  } catch (e) {
    console.log(e);
    return res.send(error(401, "Invalid refresh token"));
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    return res.send(success(200, "user logged out"));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

//internal functions
const generateAccessToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
      expiresIn: "1d",
    });
    console.log(token);
    return token;
  } catch (e) {
    console.log(e);
  }
};
const generateRefreshToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
      expiresIn: "1y",
    });
    console.log(token);
    return token;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  signupController,
  loginController,
  refreshAccessTokenController,
  logoutController,
};
