import { Page } from "@playwright/test";
export default class Login {
  constructor(public page: Page) {}

  async login() {
    await this.page.locator("#email").type("link2muhammadusman@gmail.com");
    await this.page
      .locator("#outlined-adornment-password")
      .type("mCz*sG8%472Z");
    await this.page.click('[data-testid="login"]');
    await this.page.waitForTimeout(20000);
  }
}
