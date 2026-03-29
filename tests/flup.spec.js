import{test, expect} from "@playwright/test";

test('Upload a file', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload#google_vignette'); // practice website
  await page.locator('.form-control').setInputFiles('C:\\Users\\elect\\Downloads\\playwright_interview_qna.pdf'); // first locate from where you want to upload then address of file
  await page.locator('#fileSubmit').click();// click to upload button 
  await page.pause();
})