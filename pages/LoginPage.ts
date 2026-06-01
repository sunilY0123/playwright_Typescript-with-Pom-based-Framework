import { test, expect, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("[name='user_name']");
    this.passwordInput = page.locator("[name='user_password']");
    this.loginButton = page.locator("[name='Login']");
  }

  async validLogin() {
    await this.usernameInput.fill("admin");
    await this.passwordInput.fill("admin");
    await this.loginButton.click();
  }

  async invalidLogin() {
    await this.usernameInput.fill("adm");
    await this.passwordInput.fill("admin");
    await this.loginButton.click();
    await expect(
      this.page.getByRole("cell", {
        name: "You must specify a valid username and password.",
        exact: true,
      }),
    ).toBeVisible();
  }
}
