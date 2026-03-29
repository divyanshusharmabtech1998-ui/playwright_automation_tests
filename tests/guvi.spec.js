import {test, expect} from '@playwright/test';

test("guvi login", async({page})=>{
    await page.goto("https://www.guvi.in/");
    await page.pause();
})