import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/final/calculator?engine=engine");
});

test("basic addition", async ({ page }) => {
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("3");
});

test("mixed operations", async ({ page }) => {
  // 12 ÷ 3 × 4 - 2 + 5 = 19
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "÷" }).click();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("button", { name: "×" }).click();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("button", { name: "−" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "5" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("19");
});

test("decimal input and modulo", async ({ page }) => {
  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "%" }).click();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("3");

  await page.getByRole("button", { name: "AC" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "." }).click();
  await page.getByRole("button", { name: "5" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "." }).click();
  await page.getByRole("button", { name: "5" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("4");
});

test("divide by zero shows Error and clears", async ({ page }) => {
  await page.getByRole("button", { name: "8" }).click();
  await page.getByRole("button", { name: "÷" }).click();
  await page.getByRole("button", { name: "0" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#display")).toHaveValue("Error");
  await page.getByRole("button", { name: "AC" }).click();
  await expect(page.locator("#display")).toHaveValue("0");
});
