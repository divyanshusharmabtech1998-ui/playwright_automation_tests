// fixtures.js
import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/'); // works because of baseURL

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // wait for successful login
    await page.waitForURL('**/inventory.html');

    await use(page);
  },
});

export const expect = base.expect;