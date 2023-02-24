const mongoose = require("mongoose");
const IUserModel = require("../interfaces/User/UserModel");

const userSchema = new mongoose.Schema < IUserModel > (
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  });

module.exports = mongoose.model < IUserModel > ('User', userSchema)
