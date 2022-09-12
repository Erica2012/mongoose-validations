const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
 body : {
    type: String,
    required: true,
    minLength: 2,
  },
  published: {
    type: Boolean,
    default: false,
  },
});
module.exports = model("Post", postSchema);
