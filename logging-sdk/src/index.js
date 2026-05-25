import axios from "axios";

let config = {
  apiKey: null,
  appName: null,
  baseUrl: "http://localhost:5000/api" // change to production URL later
};

/**
 * Initialize SDK with API key + application name
 */
export function init({ apiKey, appName }) {
  if (!apiKey || !appName) {
    throw new Error("API key and application name are required");
  }
  config.apiKey = apiKey;
  config.appName = appName;
}

/**
 * Send a log to the backend
 */
export async function log({ level = "INFO", message }) {
  if (!config.apiKey || !config.appName) {
    throw new Error("SDK not initialized. Call init() first.");
  }

  try {
    const response = await axios.post(
      `${config.baseUrl}/logs`,
      {
        appName: config.appName,
        level,
        message
      },
      {
        headers: {
          "x-api-key": config.apiKey
        }
      }
    );
    return response.data;
  } catch (err) {
    console.error("Failed to send log:", err.response?.data || err.message);
    throw err;
  }
}
