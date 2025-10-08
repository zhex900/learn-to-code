import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/exercise-3/calculator.html?engine=default");
});

test("basic addition", async ({ page }) => {
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("3");
});
