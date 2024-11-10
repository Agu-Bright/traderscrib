import mongoose, { models } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Account Name Already Exists"],
    required: [true, "Account Name is Required"],
  },
  email: {
    type: String,
    unique: [true, "Account Name Already Exists"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  country: {
    type: String,
    required: [true, "Country Type is required"],
  },
  accountType: {
    type: String,
    required: [true, "Account Type is required"],
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
//Encrypting password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("withdrawalPassword")) {
    next();
  }
  this.withdrawalPassword = await bcrypt.hash(this.withdrawalPassword, 10);
});

//Generate password reset token
userSchema.methods.getRessetPasswordToken = function () {
  //Gen token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //hash and set to resetPassword Token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

//because this route is called every time a user signIn we need to make this additional check
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
