import { type Locator, type Page } from "@playwright/test";


export class AccountAccountPage {
  readonly passwordListItem: Locator;

  constructor(page: Page) {
    this.passwordListItem = page.locator('#column-right > div > a:nth-child(3)');
  }

  async clickOnPasswordListItem(): Promise<void>{
    await this.passwordListItem.click();
  }

}