// middleware/apiKeyAuth.js
import Developer from "../models/Developer.js";
import Application from "../models/Application.js";

export default async function apiKeyAuth(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  const { appName } = req.body;

  if (!apiKey || !appName) {
    return res.status(401).json({ message: "API key and appName required" });
  }

  const developer = await Developer.findOne({ apiKey });
  if (!developer) {
    return res.status(403).json({ message: "Invalid API key" });
  }

  const app = await Application.findOne({ name: appName, owner: developer._id });
  if (!app) {
    return res.status(403).json({ message: "Application not found or not owned by developer" });
  }

  req.developer = developer;
  req.application = app;
  next();
}
