import { Given, When, Then } from '@cucumber/cucumber';
import { test,chromium,Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('Launch browser', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    console.log('Browser launched');
});
When('Enter url',async () => {
    await page.goto("https://sureshitacademy.in/hrms/login.php");
    console.log('Application Opened');
});
Then('Close browser', async () => {
    await browser.close();
    console.log('Browser closed');
});
When('login into application',async () => {
   await page.locator("//input[@name='txtUserName']").fill("sureshit");
   await page.locator("//input[@name='txtPassword']").fill("sureshit");
   await page.locator("//input[@name='Submit']").click();
   console.log('Login completed');
});
When('logout from application',async () => {
 await page.getByRole('link', { name: 'Logout' }).click();
 console.log('Logout completed');
});