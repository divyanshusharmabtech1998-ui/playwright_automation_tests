import {test, expect } from '@playwright/test'

test('practice', async({ page }) => {
        await page.goto('https://www.facebook.com/');
await page.locator('#_R_64qjbjb9pb6amH1_').click();
await page.locator('#_R_64qjbjb9pb6amH1_').fill('Divyanshu Sharma Btech');
await page.locator('#_R_66qjbjb9pb6amH1_').click();
await page.locator('#_R_66qjbjb9pb6amH1_').fill('divyanshu');
await page.getByRole('button',{name: 'Log in'}).click();
await page.pause();
}

);