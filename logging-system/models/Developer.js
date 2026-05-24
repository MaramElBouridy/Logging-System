import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcryptjs";

const developerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: { type: String, unique: true }
});

// Hash password before saving
developerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Generate API key
developerSchema.pre("save", function (next) {
  if (!this.apiKey) {
    this.apiKey = crypto.randomBytes(16).toString("hex");
  }
  next();
});

// Compare password
developerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Developer", developerSchema);
