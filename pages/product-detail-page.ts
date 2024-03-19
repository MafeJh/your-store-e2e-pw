import { type Locator, type Page } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;
  readonly alertMessage: Locator;
  readonly closeAlertMessageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator('div#content h1');
    this.productPrice = page.locator('div#content li>h2');
    this.productQuantity = page.locator('#input-quantity');
    this.addToCartButton = page.locator('button#button-cart');
    this.cartButton = page.locator('button.btn.btn-inverse');
    this.alertMessage = page.locator('.alert.alert-success');
    this.closeAlertMessageButton = page.locator('div.alert.alert-success > button.close');

  }

  async typeOnQuantityInput(quantity: string): Promise<void> {
    await this.productQuantity.clear();
    await this.productQuantity.fill(quantity);
  }

  async clickOnAddToCartButton(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickCartBtn(): Promise<void> {
    await this.cartButton.click();
  }

  async clickOnCloseAlertMessageButton(): Promise<void> {
    await this.closeAlertMessageButton.click();
  }

}