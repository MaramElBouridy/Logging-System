import express from "express";
import jwt from "jsonwebtoken";
import Developer from "../models/Developer.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const developer = new Developer({ username, email, password });
  await developer.save();
  res.json({ message: "Registered successfully", apiKey: developer.apiKey });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const developer = await Developer.findOne({ email });
  if (developer && await developer.matchPassword(password)) {
    const token = jwt.sign({ id: developer._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

export default router;
