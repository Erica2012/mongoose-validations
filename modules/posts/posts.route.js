const router = require("express").Router;

const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("./posts.controller");

const postRouter = router();

postRouter.route("/").get(getAllPosts).post(createPost);
postRouter.route("/:postId")
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = postRouter;
