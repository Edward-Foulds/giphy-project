import { TIMEOUT_SEC } from "./config.js";

const timeout = function (sec) {
  console.log("Running timeout");
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    console.log("This is the response:", res);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.log("ERROROROROROR", err);
    throw err;
  }
};
