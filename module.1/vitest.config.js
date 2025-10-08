import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.js"],
    exclude: [
      "tests/**", // exclude Playwright specs
      "node_modules/**",
      "dist/**",
      ".{git,cache,output,temp}/**",
    ],
  },
});
