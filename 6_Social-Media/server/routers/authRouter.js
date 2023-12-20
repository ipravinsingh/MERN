// // Lec_1
// const router = require("express").Router();
// const {
//   signupController,
//   loginController,
//   refreshAccessTokenController,
// } = require("../controllers/authController");

// router.post("/signup", signupController);
// router.post("/login", loginController);
// router.post("/refresh", refreshAccessTokenController);

// module.exports = router;

// // Lec_2
// const router = require("express").Router();
// const {
//   signupController,
//   loginController,
//   refreshAccessTokenController,
// } = require("../controllers/authController");

// router.post("/signup", signupController);
// router.post("/login", loginController);
// router.get("/refresh", refreshAccessTokenController);

// module.exports = router;

// Lec_3
const router = require("express").Router();
const {
  signupController,
  loginController,
  refreshAccessTokenController,
  logoutController,
} = require("../controllers/authController");

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/refresh", refreshAccessTokenController);
router.post("/logout", logoutController);

module.exports = router;
