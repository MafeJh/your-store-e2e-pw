import { type Locator, type Page } from '@playwright/test';

export class AccountSuccess{
  readonly successMessage: Locator;
  readonly accountCreatedMessage: Locator;
  readonly continueButton: Locator;


  constructor(page: Page){
    this.successMessage = page.locator('#content > h1');
    this.accountCreatedMessage = page.locator('#content > p:nth-child(2)');
    this.continueButton = page.locator('a.btn.btn-primary');
  }

  async clickOnContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

}