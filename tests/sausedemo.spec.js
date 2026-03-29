import{test, expect} from '@playwright/test'; //syntax

test("login Auth", async({page}) =>{ // syntax
  await page.goto("https://www.saucedemo.com/"); // test website address 
  await page.getByPlaceholder("username").fill("visual_user"); // enter the username
  await page.getByPlaceholder("Password").fill("secret_sauce"); // enter the password
  await page.getByRole("button",{name:"Login"}).click(); // login via button selector and get by role locator
  if (await page.getByText("Sauce Labs ghhhfhBackpack").isVisible()){ // (if condition) to check Sauce Labs Backpack item present on that web page or not 
    await page.locator("#add-to-cart-sauce-labs-backpack").click(); // add to cart the item Sauce Labs Backpack
    await page.locator(".shopping_cart_link").click(); // enter into the cart to check item is present or not 
    await page.getByRole('button', {name: "continue shopping"}).click(); // Going to dash board
    await page.locator("#react-burger-menu-btn").click(); // click on menu button 
    await page.locator("#logout_sidebar_link").click(); // click on logout button

  }
  else{
    await page.locator("#react-burger-menu-btn").click(); // click on menu button 
    await page.locator("#logout_sidebar_link").click(); // click on logout button

  }
  await page.pause(); // to stop the web page after complete execution 


})