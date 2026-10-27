import { test } from '@playwright/test';
import path from 'node:path';

test('TC_Screenshot', async ({ page }, testInfo) => {
    // Keep screenshots outside test-results, which Playwright clears each run.
    const screenshotDirectory = path.resolve(__dirname, '../../Screenshots');
    const getScreenshotPath = (name: string) => {
        // Use the PC's local date and time, with filename-safe separators.
        const timestamp = new Date().toLocaleString('en-GB').replace(/[/:]/g, '-').replace(', ', '_');
        return path.join(screenshotDirectory, `${name}_${testInfo.project.name}_${timestamp}.png`);
    };

    await page.goto('https://ctcorphyd.com/SureshIT/login.php');
    console.log("Application Opened");
    await page.waitForTimeout(3000);
    await page.locator('//input[@name="txtUserName"]').fill('sureshit');
    await page.locator('//input[@name="txtPassword"]').fill('sureshit');
    await page.waitForTimeout(3000);
    await page.locator('//input[@name="Submit"]').click();
    console.log("Login completed");
    await page.waitForTimeout(3000);
    //To take screenshot of the entire page 
    await page.screenshot({
        path: getScreenshotPath('fullpage'), fullPage: true
    });
    await page.waitForTimeout(3000);
    //To take screenshot of the specific element
    await page.locator('//a[text()="Logout"]').screenshot({
        path: getScreenshotPath('Logout')
    });
    await page.waitForTimeout(3000);
    //To take screenshot of the specific area 
    await page.screenshot({
        path: getScreenshotPath('Area'), clip: {
                x: 0, y: 0, width: 500,
                height: 500
            }
    });
    //click on logout link
    await page.locator('//a[text()="Logout"]').click();
    console.log("Logout completed");
}
)
