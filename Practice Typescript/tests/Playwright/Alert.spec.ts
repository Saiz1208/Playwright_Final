import { test } from '@playwright/test';

test('TC_Alerts_Login', async ({ page }) => {
    console.log('Alerts Example');
    //
    // Step 1: Launch Application
    //
    await page.goto('https://ctcorphyd.com/SureshIT/login.php');
    await page.waitForTimeout(3000);
    //
    // Step 2: Enter Username & Click Submit (Alert appears)
    //
    await page.locator('input[name="txtUserName"]').fill('sureshit');
    //
    // Step 3: Handle Alert

    //
    page.on('dialog', async (dialog) => {
        console.log('Alert Text:',
            dialog.message());
        await dialog.accept(); // OK button
    });
    await page.locator('input[name="Submit"]').click();
    await page.waitForTimeout(3000);
    //
    // Step 4: Enter Password & Login
    //
    await page.locator('input[name="txtPassword"]').fill('sureshit');
    await page.locator('input[name="Submit"]').click();
    console.log('Login Completed');
    await page.waitForTimeout(3000);
    //
    // Step 5: Logout
    //
    await page.locator('text=Logout').click();
    await page.waitForTimeout(3000); console.log('Logout Completed');
});


test('TC_Keyboard Actions',async({page}) => {
//--Test Steps
await page.goto('https://ctcorphyd.com/SureshIT/login.php'); 
console.log('Application Opened');
await page.waitForTimeout(3000);
await page.locator('//input[@name="txtUserName"]').click(); 
await page.waitForTimeout(3000);
//Type username and password using keyboard 
await page.keyboard.type('sureshit');
await page.waitForTimeout(3000); 
await page.keyboard.press('Tab');
 await page.waitForTimeout(3000);
await page.keyboard.type('sureshit'); 
await page.waitForTimeout(3000); 
await page.keyboard.press('Tab'); 
await page.waitForTimeout(3000);
//perform Enter key to click on Login button 
await page.keyboard.press('Enter');
await page.waitForTimeout(3000); 
console.log('Login Completed');
//perform TAB for 2 times to navigate to Logout link 
for(let i=1; i<=2; i++){
await page.keyboard.press('Tab');
//await page.waitForTimeout(3000); 
console.log(i);
}
//perform Enter key to click on Logout link 
await page.keyboard.press('Enter');
await page.waitForTimeout(3000); 
console.log('Logout Completed');
}
);