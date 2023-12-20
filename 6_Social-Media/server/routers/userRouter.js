// // Lec_3
// const router = require("express").Router();
// const requireUser = require("../middleware/requireUser");
// const UserController = require("../controllers/userController");

// router.post(
//   "/follow",
//   requireUser,
//   UserController.followOrUnfollowUserController
// );
// router.get(
//   "/getPostsOfFollowing",
//   requireUser,
//   UserController.getPostsOfFollowing
// );

// module.exports = router;

// // Lec_4,5
// const router = require("express").Router();
// const requireUser = require("../middleware/requireUser");
// const UserController = require("../controllers/userController");

// router.post(
//   "/follow",
//   requireUser,
//   UserController.followOrUnfollowUserController
// );
// router.get(
//   "/getPostsOfFollowing",
//   requireUser,
//   UserController.getPostsOfFollowing
// );
// router.get("/getMyPosts", requireUser, UserController.getMyPosts);
// router.get("/getUserPosts", requireUser, UserController.getUserPosts);
// router.delete("/", requireUser, UserController.deleteMyProfile);

// module.exports = router;

// // Lec_6
// const router = require("express").Router();
// const requireUser = require("../middleware/requireUser");
// const UserController = require("../controllers/userController");

// router.post(
//   "/follow",
//   requireUser,
//   UserController.followOrUnfollowUserController
// );
// router.get(
//   "/getPostsOfFollowing",
//   requireUser,
//   UserController.getPostsOfFollowing
// );
// router.get("/getMyPosts", requireUser, UserController.getMyPosts);
// router.get("/getUserPosts", requireUser, UserController.getUserPosts);
// router.delete("/", requireUser, UserController.deleteMyProfile);
// router.get("/getMyInfo", requireUser, UserController.getMyInfo);
// router.put("/", requireUser, UserController.updateUserProfile);
// router.post("/getUserProfile", requireUser, UserController.getUserProfile);

// module.exports = router;

// Lec_7
const router = require("express").Router();
const requireUser = require("../middleware/requireUser");
const UserController = require("../controllers/userController");

router.post(
  "/follow",
  requireUser,
  UserController.followOrUnfollowUserController
);
router.get("/getFeedData", requireUser, UserController.getPostsOfFollowing);
router.get("/getMyPosts", requireUser, UserController.getMyPosts);
router.get("/getUserPosts", requireUser, UserController.getUserPosts);
router.delete("/", requireUser, UserController.deleteMyProfile);
router.get("/getMyInfo", requireUser, UserController.getMyInfo);
router.put("/", requireUser, UserController.updateUserProfile);
router.post("/getUserProfile", requireUser, UserController.getUserProfile);

module.exports = router;
