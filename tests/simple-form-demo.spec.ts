import { test, expect } from "@playwright/test";

test("Simple Form Demo - displays correct message", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.getByText("Simple Form Demo").click();

  await expect(page).toHaveURL(/.*simple-form-demo/);

  const message = "Welcome to LambdaTest";

  await page
    .locator('input[placeholder="Please enter your Message"]')
    .fill(message);

  await page.locator("#showInput").click();

  const displayedText = await page.locator("#message").textContent();
  expect(displayedText?.trim()).toBe(message);
});
