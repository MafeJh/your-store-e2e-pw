import { CheckoutSuccessPage } from './../pages/checkout-success-page';
import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductDetailPage } from '../pages/product-detail-page';
import { SearchResultPage } from '../pages/search-result-page';
import { ShoppingCartDetailPage } from '../pages/shopping-cart-detail-page';
import { CheckoutPage } from '../pages/checkout-page';
import { RegisterPage } from '../pages/register-page';
import { AccountSuccess } from '../pages/account-success';
import { AccountAccountPage } from '../pages/account-account-page';
import { AccountPasswordPage } from '../pages/account-password';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opencart.abstracta.us');
});

const PRODUCT = 'iPhone';
const PRODUCT_PRICE = '$123.20';

test.describe('The user navigate on the web site your store', () => {
  test(`The user added a "${PRODUCT}" product to the cart and checkout`, async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.slideShow).toBeVisible();
    // Search for a product
    await homePage.typeItemOnSearchInput(PRODUCT);
    await homePage.clickOnSearchButton();

    // Make sure product is on Search Result page
    const searchResultPage = new SearchResultPage(page);
    await expect(searchResultPage.title).toHaveText(`Search - ${PRODUCT}`);
    await expect(searchResultPage.productName).toContainText(PRODUCT);

    // Click on product name and go to Product Detail page
    await searchResultPage.clickOnProductName();

    // Make sure product details are visually correct
    const productDetailPage = new ProductDetailPage(page);
    await expect(productDetailPage.productName).toHaveText(PRODUCT);
    await expect(productDetailPage.productPrice).toHaveText(PRODUCT_PRICE);

    // Type quantity and add to the cart
    await productDetailPage.typeOnQuantityInput('2');
    await productDetailPage.clickOnAddToCartButton();

    // Verify alert message is visible
    if (await productDetailPage.alertMessage.isVisible()) {
      await expect(productDetailPage.alertMessage).toHaveText(`Success: You have added ${PRODUCT} to your shopping cart!×`);
      // Make sure alert message is not longer visible
      await expect(productDetailPage.alertMessage).not.toBeVisible();
      // Close alert message
      await productDetailPage.clickOnCloseAlertMessageButton();

    } else {
      await homePage.shoppingCartButton.isVisible()
    }

    // Click on shopping cart
    await homePage.clickOnShoppingCartButton();

    // Make sure shopping cart preview is visible
    await expect(homePage.shoppingCartPreview).toBeVisible();
    await expect(homePage.viewShoppingCartLink).toBeVisible();

    // Click on view shopping cart
    await homePage.clickOnViewShoppingCartLink();

    // Make sure alert, quantity and checkout buttons are visible
    const shoppingCartDetailPage = new ShoppingCartDetailPage(page);
    await expect(shoppingCartDetailPage.alertProductsMarkedMessage).toBeVisible();
    await expect(shoppingCartDetailPage.itemsQuantityInput).toBeVisible();
    await expect(shoppingCartDetailPage.checkOutButton).toBeVisible();

    // Click on checkout button
    await shoppingCartDetailPage.clickOnCheckOutButton();

    // Make sure Register Account radio button is visible and checked
    const checkoutPage = new CheckoutPage(page);
    await expect(checkoutPage.title).toBeVisible();
    await expect(checkoutPage.registerAccountRadioButton).toBeVisible();
    expect(await checkoutPage.registerAccountRadioButton.isChecked()).toBeTruthy();
    await expect(checkoutPage.continueAccountButton).toBeVisible();

    // Click on continue to add register account information
    await checkoutPage.clickOnRegisterAccountRadioButton();
    await checkoutPage.clickOnContinueAccountButton();

    // Adding Account & Billing Details
    const randomNumber = Math.floor(Math.random() * 10000);
    await expect(checkoutPage.collapsePaymentAddress).toBeVisible();
    await checkoutPage.typeOnFieldForm(checkoutPage.firstNameInput, 'Mafe');
    await checkoutPage.typeOnFieldForm(checkoutPage.lastNameInput, 'Jiménez');
    await checkoutPage.typeOnFieldForm(checkoutPage.emailInput, `mafe${randomNumber}@yopmail.com`);
    await checkoutPage.typeOnFieldForm(checkoutPage.telephoneInput, '123123');
    await checkoutPage.typeOnFieldForm(checkoutPage.address1Input, 'Street 123');
    await checkoutPage.typeOnFieldForm(checkoutPage.cityInput, 'Bello Hell');
    await checkoutPage.select(checkoutPage.countrySelect, 'Colombia');
    await checkoutPage.select(checkoutPage.regionStateSelect, 'Antioquia');
    await checkoutPage.typeOnFieldForm(checkoutPage.passwordInput, 'meencantabello123');
    await checkoutPage.typeOnFieldForm(checkoutPage.confirmPasswordInput, 'meencantabello123');
    await checkoutPage.checkPrivacyPolicy();

    await checkoutPage.clickOnRegisterButton();
    // Make sure shipping address is visible
    await expect(checkoutPage.shippingAddressRadioButton).toBeVisible();
    await expect(checkoutPage.deliveryDetailsContinueButton).toBeVisible();
    // Click on shipping address and continue
    await checkoutPage.clickOnShippingAddressRadioButton();
    await checkoutPage.clickOnDeliveryDetailsContinueButton();

    // Click on continue delivery method
    await checkoutPage.clickOnDeliveryMethodContinueButton();
    // Click on terms and conditions and payment method continue
    await checkoutPage.clickOnPaymentTermsAndConditionsCheckbox();
    await checkoutPage.clickOnPaymentMethodContinueButton();

    // Click on terms and conditions and payment method continue
    await checkoutPage.clickOnConfirmOrderButton();
    // Make sure place has been ordered
    const checkoutSuccessPage = new CheckoutSuccessPage(page);
    //await expect(checkoutSuccessPage.title).toHaveText(`Your order has been placed!`);
    //await expect(checkoutSuccessPage.orderPlacedSuccessfully).toHaveText(`Your order has been successfully processed!`);
    await expect(page).toHaveURL(/success/);
    // Click on continue and go back to the Home Page
    await checkoutSuccessPage.clickOnContinueButton();
    // Make sure the Home Page is displayed
    await expect(page).toHaveURL(/home/);
    await expect(homePage.slideShow).toBeVisible();
  });

});

test('The user registers on the webpage and attempts to change the password incorrectly', async ({ page }) => {
  
  // Validate home page URL
  await expect(page).toHaveURL('https://opencart.abstracta.us/');

  const homePage = new HomePage(page);

  // Click on My Account from home page and then Register option
  await homePage.clickOnMyAccountButton();
  await homePage.clickMyAccountListItem();

  const registerPage = new RegisterPage(page);

  // Fill out user registration form
  const randomNumber = Math.floor(Math.random() * 10000);
  await registerPage.typeOnFieldForm(registerPage.firstNameInput, 'Mafe98');
  await registerPage.typeOnFieldForm(registerPage.lastNameInput, 'JH');
  await registerPage.typeOnFieldForm(registerPage.emailInput, `mafe0612${randomNumber}@yopmail.com`);
  await registerPage.typeOnFieldForm(registerPage.telephoneInput, '1234567');
  await registerPage.typeOnFieldForm(registerPage.passwordInput, 'MafePwd123');
  await registerPage.typeOnFieldForm(registerPage.passwordConfirmInput, 'MafePwd123');
  await registerPage.clickOnAgreePrivacyPolicyCheckbox();
  await registerPage.clickOnContinueNewCostumer();

  const accountSuccess = new AccountSuccess(page);

  // Perform registration and verify success message
  await expect(accountSuccess.successMessage).toHaveText('Account');
  await expect(accountSuccess.accountCreatedMessage).toHaveText('Congratulations! Your new account has been successfully created!');

  await accountSuccess.clickOnContinueButton();

  // Go to account section and select Password to change password
  const accountAccountPage = new AccountAccountPage(page);

  await accountAccountPage.clickOnPasswordListItem();

  // Change password 
  const accountPasswordPage = new AccountPasswordPage(page);

  await accountPasswordPage.typeOnFieldForm(accountPasswordPage.passwordInput, 'NewPWD123');
  await accountPasswordPage.typeOnFieldForm(accountPasswordPage.passwordConfirmInput, 'PasswordThatDoesNotMatch123');

  // Click continue
  await accountPasswordPage.clickOnContinueButton();

  // Verify error message for Password confirmation
  await expect(accountPasswordPage.errorMessage).toBeVisible();
  await expect(accountPasswordPage.errorMessage).toHaveText('Password confirmation does not match password!');
  
});



