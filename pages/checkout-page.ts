import { type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly title: Locator;
  readonly collapsePaymentAddress: Locator;
  readonly continueAccountButton: Locator;
  readonly registerButton: Locator;

  // Step 1: Checkout Options
  readonly registerAccountRadioButton: Locator;
  // Step 2: Account & Billing Details
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly address1Input: Locator;
  readonly cityInput: Locator;
  readonly countrySelect: Locator;
  readonly regionStateSelect: Locator;
  readonly privacyPolicyCheckbox: Locator;
  // Step 3:
  readonly shippingAddressRadioButton: Locator;
  readonly deliveryDetailsContinueButton: Locator;
  // Step 4:
  readonly deliveryMethodContinueButton: Locator;
  // Step 5:
  readonly paymentTermsAndConditionsCheckbox: Locator;
  readonly paymentMethodContinueButton: Locator;
  // Step 5:
  readonly confirmOrderButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('#content h1');
    this.collapsePaymentAddress = page.locator('#collapse-payment-address');
    this.continueAccountButton = page.locator('input#button-account');
    this.registerButton = page.locator('input#button-register');
    // Step 1
    this.registerAccountRadioButton = page.locator('input[type="radio"][value="register"]');
    // Step 2
    this.firstNameInput = page.locator('input#input-payment-firstname.form-control');
    this.lastNameInput = page.locator('#input-payment-lastname');
    this.emailInput = page.locator('#input-payment-email');
    this.telephoneInput = page.locator('#input-payment-telephone');
    this.address1Input = page.locator('#input-payment-address-1');
    this.cityInput = page.locator('#input-payment-city');
    this.countrySelect = page.locator('#input-payment-country');
    this.regionStateSelect = page.locator('#input-payment-zone');
    this.privacyPolicyCheckbox = page.locator('input[type="checkbox"][name="agree"]');
    this.passwordInput = page.locator('#input-payment-password');
    this.confirmPasswordInput = page.locator('#input-payment-confirm');
    // Step 3
    this.shippingAddressRadioButton = page.locator('input[value="existing"][name="shipping_address"]');
    this.deliveryDetailsContinueButton = page.locator('#button-shipping-address');
    // Step 4
    this.deliveryMethodContinueButton = page.locator('#button-shipping-method');
    // Step 5
    this.paymentTermsAndConditionsCheckbox = page.locator('input[type=checkbox]:nth-child(2)');
    this.paymentMethodContinueButton = page.locator('#button-payment-method');
    // Step 6
    this.confirmOrderButton = page.locator('#button-confirm');
  }

  async typeOnFieldForm(field: Locator, value: string): Promise<void> {
    await field.clear();
    await field.fill(value);
  }

  async clickOnRegisterAccountRadioButton(): Promise<void> {
    await this.registerAccountRadioButton.click();
  }

  async select(field: Locator, option: string): Promise<void> {
    await field.selectOption(option);
  }

  async clickOnContinueAccountButton(): Promise<void> {
    await this.continueAccountButton.click();
  }

  async clickOnRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }

  async checkPrivacyPolicy(): Promise<void> {
    await this.privacyPolicyCheckbox.check();
  }

  async clickOnShippingAddressRadioButton(): Promise<void> {
    await this.shippingAddressRadioButton.click();
  }

  async clickOnDeliveryDetailsContinueButton(): Promise<void> {
    await this.deliveryDetailsContinueButton.click();
  }

  async clickOnDeliveryMethodContinueButton(): Promise<void> {
    await this.deliveryMethodContinueButton.click();
  }

  async clickOnPaymentMethodContinueButton(): Promise<void> {
    await this.paymentMethodContinueButton.click();
  }

  async clickOnPaymentTermsAndConditionsCheckbox(): Promise<void> {
    await this.paymentTermsAndConditionsCheckbox.click();
  }

  async clickOnConfirmOrderButton(): Promise<void> {
    await this.confirmOrderButton.click();
  }


}