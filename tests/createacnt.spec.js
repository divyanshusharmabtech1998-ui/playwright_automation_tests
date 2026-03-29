import {test, expect} from  '@playwright/test'
test('Create account', async ({page}) => {
    await page.goto("https://www.instagram.com/");
    await page.getByRole('link', { name: 'Create new account'});
    // await page.locator('#_r_l_').fill('8979776265');
    await page.pause();
    // await page.locator('#_r_o_').fill('divyanshu')
    // await page.getByRole('combobox', {name: 'Select Month'});
    // await page.getByText('May',{exact: true}).click();

}
)
 