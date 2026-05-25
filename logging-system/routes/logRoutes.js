import express from "express";
import Log from "../models/Log.js";
import Application from "../models/Application.js";
import { validateApiKey } from "../middleware/apiKeyMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import apiKeyAuth from "../middleware/apiKeyAuth.js";

const router = express.Router();

// Get logs with filtering, sorting, pagination
router.get("/:name/logs", protect, async (req, res) => {
  const { level, sort, page = 1, limit = 10 } = req.query;
  const app = await Application.findOne({ name: req.params.name, developer: req.developer._id });
  if (!app) return res.status(404).json({ message: "Application not found" });

  const query = { application: app._id };
  if (level) query.level = level;

  const logs = await Log.find(query)
    .sort(sort ? { createdAt: sort === "asc" ? 1 : -1 } : {})
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(logs);
});

// Post a log (validate API key)
router.post("/:name/logs", validateApiKey, async (req, res) => {
  const app = await Application.findOne({ name: req.params.name, developer: req.developer._id });
  if (!app) return res.status(404).json({ message: "Application not found" });

  const { message, level } = req.body;
  let log = await Log.findOne({ message, level, application: app._id });

  if (log) {
    log.count += 1;
    await log.save();
  } else {
    log = new Log({ message, level, application: app._id });
    await log.save();
  }

  res.json(log);
});

router.post("/logs", apiKeyAuth, async (req, res) => {
  const { level, message } = req.body;
  const log = new Log({
    appName: req.application.name,
    level,
    message
  });
  await log.save();
  res.status(201).json({ message: "Log saved", log });
});

export default router;
