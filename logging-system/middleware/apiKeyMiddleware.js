import Developer from "../models/Developer.js";

export const validateApiKey = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) return res.status(401).json({ message: "API key required" });

  const developer = await Developer.findOne({ apiKey });
  if (!developer) return res.status(403).json({ message: "Invalid API key" });

  req.developer = developer;
  next();
};
