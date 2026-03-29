import { test, expect } from '@playwright/test';

test('Download file', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/download');// practice website
  await page.getByText("1774612179312_playwright_interview_qna.pdf").click();// after checking file name it will be downloading

  await page.pause();
});
