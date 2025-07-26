// predict.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";

export async function predictImage(imageBase64) {
  try {
    const response = await axios({
      method: "POST",
      url: "https://detect.roboflow.com/final-mlclc/1", // <-- Correct endpoint
      params: {
        api_key: "aMkuT5BMmcM8ruzbEXPB"
      },
      data: imageBase64,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Prediction failed: ${error.message}`);
  }
}
