import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.youtube.com/");
  await browser.close();
  await browser.close();
}

export default globalSetup;
