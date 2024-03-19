import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly shoppingCartButton: Locator;
  readonly shoppingCartPreview: Locator;
  readonly viewShoppingCartLink: Locator;
  readonly slideShow: Locator;
  readonly myAccountButton: Locator;
  readonly myAccountListItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#search input[type=text]');
    this.searchButton = page.locator('button[type="button"] > i.fa-search');
    this.shoppingCartButton = page.locator('button.btn.btn-inverse');
    this.shoppingCartPreview = page.locator('#cart > ul.dropdown-menu');
    this.viewShoppingCartLink = page.locator('ul.dropdown-menu p.text-right a:first-of-type');
    this.slideShow = page.locator('#slideshow0');
    this.myAccountButton = page.locator('#top-links > ul > li.dropdown');
    this.myAccountListItem = page.locator('li.dropdown.open > ul > li:nth-child(1) > a');
  }

  async typeItemOnSearchInput(item: string): Promise<void> {
    await this.searchInput.fill(item);
  }

  async clickOnSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async clickOnViewShoppingCartLink(): Promise<void> {
    await this.viewShoppingCartLink.click();
  }

  async clickOnShoppingCartButton(): Promise<void> {
    await this.shoppingCartButton.click();
  }

  async clickOnMyAccountButton(): Promise<void> {
    await this.myAccountButton.click();
  }

  async clickMyAccountListItem(): Promise<void> {
    await this.myAccountListItem.click();
  }

}