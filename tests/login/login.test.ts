import { test, expect } from "@playwright/test";
import Login from "../../pages/login/login.page";

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test("Should Login Successfully", async ({ page }) => {
  const loginPage = new Login(page);

  await loginPage.login();
});
