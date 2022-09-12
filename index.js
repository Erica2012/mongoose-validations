const express = require("express");
const postRouter = require("./modules/posts/posts.route");
const { dbConnect } = require("./config/dbConnect");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Welcome to my server. use /posts to get all posts")
});

app.use("/posts", postRouter);

async function start() {
  await dbConnect();

  app.listen(4000, () => {
    console.log("server listening on http://localhost:4000");
  });
}
start();
