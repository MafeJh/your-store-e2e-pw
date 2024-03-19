import { type Locator, type Page } from "@playwright/test";


export class AccountPasswordPage {
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;
  

  constructor(page: Page) {
    this.passwordInput = page.locator('#input-password');
    this.passwordConfirmInput = page.locator('#input-confirm');
    this.errorMessage = page.locator('div.form-group.required.has-error div.text-danger');
    this.continueButton = page.locator('input.btn.btn-primary')
  }

  async typeOnFieldForm(field: Locator, value: string): Promise<void> {
    await field.fill(value);
  }

  async clickOnContinueButton(): Promise<void>{
    await this.continueButton.click();

  }

}