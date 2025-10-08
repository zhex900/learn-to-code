// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // testDir: ["final", "exercise-1", "exercise-2"],
  testDir: "./",
  testMatch: ["**/*.spec.js"],
  use: {
    headless: true,
    baseURL: "http://localhost:5000",
  },
};

export default config;
