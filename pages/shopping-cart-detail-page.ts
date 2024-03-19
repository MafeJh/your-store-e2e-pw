import { type Locator, type Page } from '@playwright/test';

export class ShoppingCartDetailPage {
  readonly page: Page;
  readonly alertProductsMarkedMessage: Locator;
  readonly itemsQuantityInput: Locator;
  readonly checkOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertProductsMarkedMessage = page.locator('#checkout-cart > div.alert.alert-danger.alert-dismissible');
    this.itemsQuantityInput = page.locator('input.form-control[value="2"]');
    this.checkOutButton = page.locator('a.btn.btn-primary');
  }

  async typeItemOnSearchInput(item: string): Promise<void> {
    await this.alertProductsMarkedMessage.fill(item);
  }

  async clickOnSearchButton(): Promise<void> {
    await this.itemsQuantityInput.click();
  }

  async clickOnCheckOutButton(): Promise<void> {
    await this.checkOutButton.click();
  }

}