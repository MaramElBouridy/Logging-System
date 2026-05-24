import express from "express";
import Application from "../models/Application.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all applications
router.get("/", protect, async (req, res) => {
  const apps = await Application.find({ developer: req.developer._id });
  res.json(apps);
});

// Get application by name
router.get("/:name", protect, async (req, res) => {
  const app = await Application.findOne({ name: req.params.name, developer: req.developer._id });
  if (!app) return res.status(404).json({ message: "Application not found" });
  res.json(app);
});

// Create application
router.post("/", protect, async (req, res) => {
  const app = new Application({ name: req.body.name, developer: req.developer._id });
  await app.save();
  res.json(app);
});

// Delete application
router.delete("/:name", protect, async (req, res) => {
  await Application.findOneAndDelete({ name: req.params.name, developer: req.developer._id });
  res.json({ message: "Application deleted" });
});

export default router;
