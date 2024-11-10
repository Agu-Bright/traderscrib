import mongoose from "mongoose";

const depositModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Wallet",
  },
  screenShot: {
    type: String,
  },
  method: {
    type: String,
  },
  amount: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Deposit =
  mongoose.models.Deposit || mongoose.model("Deposit", depositModel);

export default Deposit;
