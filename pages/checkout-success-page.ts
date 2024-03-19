import { type Locator, type Page } from '@playwright/test';

export class CheckoutSuccessPage {
  readonly page: Page;
  readonly title: Locator;
  readonly orderPlacedSuccessfully: Locator;
  readonly continueButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('#content h1');
    this.orderPlacedSuccessfully = page.locator('#content p:first-of-type');
    this.continueButton = page.locator('#content > div > div > a');
  }
  async clickOnContinueButton(): Promise<void> {
    await this.continueButton.click();
  }
}