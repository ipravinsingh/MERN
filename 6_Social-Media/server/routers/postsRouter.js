// // Lec_1,2
// const router = require("express").Router();
// const postController = require("../controllers/postsController");
// const requireUser = require("../middleware/requireUser");

// router.get("/all", requireUser, postController);

// module.exports = router;

// Lec_3
const router = require("express").Router();
const postController = require("../controllers/postsController");
const requireUser = require("../middleware/requireUser");

router.post("/", requireUser, postController.createPostController);
router.post("/like", requireUser, postController.likeAndUnlikePost);
router.put("/", requireUser, postController.updatePostsController);
router.delete("/", requireUser, postController.deletePost);

module.exports = router;
