// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
  },
};

export default config;


