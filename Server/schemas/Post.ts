import { Schema, model } from "mongoose";

const postSchema = new Schema({
  description: {
    type: String,
  },
  content: {
    type: Buffer,
    required: true,
  },
});

export default model("Post", postSchema);