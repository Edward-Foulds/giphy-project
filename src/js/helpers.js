import { TIMEOUT_SEC } from "./config.js";

// Time out function to prevent AJAX call waiting for response for too long
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    if (err.message === "Failed to fetch")
      err.message =
        "Unable to load GIPHY at this time. Please check connection and try again.";
    throw err;
  }
};
