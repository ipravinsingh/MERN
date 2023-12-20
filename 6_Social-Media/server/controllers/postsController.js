// // Lec_1
// const getAllPostsController = async (req, res) => {
//   console.log(req._id);
//   return res.send("These are all my posts");
// };
// module.exports = getAllPostsController;

// // Lec_2
// const { success } = require("../utils/responseWrapper");

// const getAllPostsController = async (req, res) => {
//   console.log(req._id);
//   return res.send(success(200, "These are all my posts"));
// };
// module.exports = getAllPostsController;

// // Lec_3
// const { success, error } = require("../utils/responseWrapper");
// const Post = require("../models/Post");
// const User = require("../models/User");

// const createPostController = async (req, res) => {
//   try {
//     const { caption } = req.body;
//     // we are getting owner req._id from the middleware.
//     if (!caption) {
//       return res.send(error(400, "Caption is required"));
//     }
//     const owner = req._id;
//     const user = await User.findById(req._id);
//     const post = await Post.create({
//       owner,
//       caption,
//     });
//     user.posts.push(post._id);
//     await user.save();

//     return res.json({ post });
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// const likeAndUnlikePost = async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);
//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }
//     // If the post is aldready liked_
//     if (post.likes.includes(curUserId)) {
//       const index = post.likes.indexOf(curUserId);
//       post.likes.splice(index, 1);

//       await post.save();
//       return res.send(success(200, "Post Unliked"));
//     } else {
//       post.likes.push(curUserId);
//       await post.save();
//       return res.send(success(200, "Post Liked"));
//     }
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// const updatePostsController = async (req, res) => {
//   try {
//     const { postId, caption } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);

//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }

//     if (post.owner.toString() !== curUserId) {
//       return res.send(error(403, "Only owners can update their posts"));
//     }

//     if (caption) {
//       post.caption = caption;
//     }

//     await post.save();
//     return res.send(success(200, post));
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// const deletePost = async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);
//     const curUser = await User.findById(curUserId);

//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }

//     if (post.owner.toString() !== curUserId) {
//       return res.send(error(403, "Only owners can delete their posts"));
//     }

//     const index = curUser.posts.indexOf(postId);
//     curUser.posts.splice(index, 1);
//     await curUser.save();

//     // Note: Instead of remove() function we use Post.deleteOne() function__
//     // await Post.remove();
//     await Post.deleteOne({ _id: postId });

//     return res.send(success(200, "Post deleted successfully"));
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// module.exports = {
//   createPostController,
//   likeAndUnlikePost,
//   updatePostsController,
//   deletePost,
// };

// // Lec_6
// const { success, error } = require("../utils/responseWrapper");
// const Post = require("../models/Post");
// const User = require("../models/User");
// const cloudinary = require("cloudinary").v2;

// const createPostController = async (req, res) => {
//   try {
//     const { caption, postImg } = req.body;
//     // we are getting owner req._id from the middleware.
//     if (!caption || !postImg) {
//       return res.send(error(400, "Caption and postImg are required"));
//     }

//     const cloudImg = await cloudinary.uploader.upload(postImg, {
//       folder: "postImg",
//     });

//     const owner = req._id;
//     const user = await User.findById(req._id);
//     const post = await Post.create({
//       owner,
//       caption,
//       image: {
//         publicId: cloudinary.public_id,
//         url: cloudImg.url,
//       },
//     });
//     user.posts.push(post._id);
//     await user.save();

//     console.log("user", user);
//     console.log("post", post);

//     return res.json(success(200, { post }));
//   } catch (e) {
//     return res.send(error(500, e.message));
//   }
// };

// const likeAndUnlikePost = async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);
//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }
//     if (post.likes.includes(curUserId)) {
//       const index = post.likes.indexOf(curUserId);
//       post.likes.splice(index, 1);

//       await post.save();
//       return res.send(success(200, "Post Unliked"));
//     } else {
//       post.likes.push(curUserId);
//       await post.save();
//       return res.send(success(200, "Post Liked"));
//     }
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// const updatePostsController = async (req, res) => {
//   try {
//     const { postId, caption } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);

//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }

//     if (post.owner.toString() !== curUserId) {
//       return res.send(error(403, "Only owners can update their posts"));
//     }

//     if (caption) {
//       post.caption = caption;
//     }

//     await post.save();
//     return res.send(success(200, post));
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// const deletePost = async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const curUserId = req._id;

//     const post = await Post.findById(postId);
//     const curUser = await User.findById(curUserId);

//     if (!post) {
//       return res.send(error(404, "Post not found"));
//     }

//     if (post.owner.toString() !== curUserId) {
//       return res.send(error(403, "Only owners can delete their posts"));
//     }

//     const index = curUser.posts.indexOf(postId);
//     curUser.posts.splice(index, 1);
//     await curUser.save();

//     // Note: Instead of remove() function we use Post.deleteOne() function__
//     // await Post.remove();
//     await Post.deleteOne({ _id: postId });

//     return res.send(success(200, "post deleted successfully"));
//   } catch (e) {
//     res.send(error(500, e.message));
//   }
// };

// module.exports = {
//   createPostController,
//   likeAndUnlikePost,
//   updatePostsController,
//   deletePost,
// };

// Lec_7
const { success, error } = require("../utils/responseWrapper");
const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const { mapPostOutput } = require("../utils/Utils");

const createPostController = async (req, res) => {
  try {
    const { caption, postImg } = req.body;
    // we are getting owner req._id from the middleware.
    if (!caption || !postImg) {
      return res.send(error(400, "Caption and postImg are required"));
    }

    const cloudImg = await cloudinary.uploader.upload(postImg, {
      folder: "postImg",
    });

    const owner = req._id;
    const user = await User.findById(req._id);
    const post = await Post.create({
      owner,
      caption,
      image: {
        publicId: cloudinary.public_id,
        url: cloudImg.url,
      },
    });
    user.posts.push(post._id);
    await user.save();

    console.log("user", user);
    console.log("post", post);

    return res.json(success(200, { post }));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const likeAndUnlikePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;

    const post = await Post.findById(postId).populate("owner");
    if (!post) {
      return res.send(error(404, "Post not found"));
    }
    if (post.likes.includes(curUserId)) {
      const index = post.likes.indexOf(curUserId);
      post.likes.splice(index, 1);
    } else {
      post.likes.push(curUserId);
    }
    await post.save();
    return res.send(success(200, { post: mapPostOutput(post, req._id) }));
  } catch (e) {
    res.send(error(500, e.message));
  }
};

const updatePostsController = async (req, res) => {
  try {
    const { postId, caption } = req.body;
    const curUserId = req._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.send(error(404, "Post not found"));
    }

    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "Only owners can update their posts"));
    }

    if (caption) {
      post.caption = caption;
    }

    await post.save();
    return res.send(success(200, post));
  } catch (e) {
    res.send(error(500, e.message));
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;

    const post = await Post.findById(postId);
    const curUser = await User.findById(curUserId);

    if (!post) {
      return res.send(error(404, "Post not found"));
    }

    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "Only owners can delete their posts"));
    }

    const index = curUser.posts.indexOf(postId);
    curUser.posts.splice(index, 1);
    await curUser.save();

    // Note: Instead of remove() function we use Post.deleteOne() function__
    // await Post.remove();
    await Post.deleteOne({ _id: postId });

    return res.send(success(200, "post deleted successfully"));
  } catch (e) {
    res.send(error(500, e.message));
  }
};

module.exports = {
  createPostController,
  likeAndUnlikePost,
  updatePostsController,
  deletePost,
};
