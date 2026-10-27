import { test, Page } from '@playwright/test';
let page: Page;
test.describe("Test Suite", () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://ctcorphyd.com/SureshIT/login.php");
        console.log("Before All Hook executed successfully");
    });
    test.beforeEach(async () => {
        await page.waitForTimeout(3000);
        console.log("Before Each Hook executed successfully");
    });

    test('Enter Username & Password', async () => {
        await page.locator('//input[@name="txtUserName"]').fill("sureshit");
        await page.locator('//input[@name="txtPassword"]').fill("sureshit");
        console.log("Username & Password entered successfully");
    });
    test('Click Login Button', async () => {
        await page.locator('//input[@name="Submit"]').click();
        console.log("Login button clicked successfully");
    });
    test.afterEach(async () => {
        await page.waitForTimeout(3000);
        console.log("After Each Hook executed successfully");
    });  
    test.afterAll(async () => {
        await page.close();
        console.log("After All Hook executed successfully");
    });
});
