const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  content: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});