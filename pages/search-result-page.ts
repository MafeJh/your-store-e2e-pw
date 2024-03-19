import { type Locator, type Page } from '@playwright/test';

export class SearchResultPage {
  readonly page: Page;
  readonly title: Locator;
  readonly productName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('div#content > h1');
    this.productName = page.locator('div.caption > h4 > a');
  }

  async clickOnProductName(): Promise<void> {
    await this.productName.click();
  }

}