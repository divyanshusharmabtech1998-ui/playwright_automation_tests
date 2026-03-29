// tests/saucedemo.spec.js
import { test, expect } from '../fixtures';

test.describe('SauceDemo Tests', () => {

  test.beforeAll(async () => {
    console.log('🔵 Start of test suite');
  });

  test.beforeEach(async () => {
    console.log('🟡 Starting test...');
  });

  test('✅ Verify inventory page after login', async ({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory/);
    await expect(loggedInPage.locator('.inventory_list')).toBeVisible();
  });

test('🛒 Add product to cart', async ({ loggedInPage }) => {
  const addToCartBtn = loggedInPage.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  await loggedInPage.click('.shopping_cart_link');
  await loggedInPage.waitForURL(/cart/);

  await expect(loggedInPage).toHaveURL(/cart/);
});

  test.afterEach(async ({}, testInfo) => {
    console.log(`🟠 Finished: ${testInfo.title}`);
  });

  test.afterAll(async () => {
    console.log('🔴 End of test suite');
  });

});