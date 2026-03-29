import { test, expect } from '@playwright/test';

test('Handle cookie dialog', async ({ page }) => {

  await page.goto('https://www.jagran.com/', { timeout: 60000 });

  const cookieBtn = page.locator('text=OK');

  await cookieBtn.waitFor({ state: 'visible' });
  await cookieBtn.click();

});