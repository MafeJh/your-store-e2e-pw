import { type Locator, type Page } from '@playwright/test';

export class RegisterPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueNewCustomer: Locator;

  constructor(page: Page) {
    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone')
    this.passwordInput = page.locator('#input-password')
    this.passwordConfirmInput = page.locator('#input-confirm')
    this.privacyPolicyCheckbox = page.locator('#content > form > div > div > input[type=checkbox]:nth-child(2)')
    this.continueNewCustomer = page.locator('input.btn.btn-primary')
  }

  async typeOnFieldForm(field: Locator, value: string): Promise<void> {
    await field.fill(value);
  }

  async clickOnAgreePrivacyPolicyCheckbox(): Promise<void> {
    await this.privacyPolicyCheckbox.click();
  }

  async clickOnContinueNewCostumer(): Promise<void> {
    await this.continueNewCustomer.click();
  }

}