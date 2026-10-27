import { test } from '@playwright/test';
test('TC_Dropdown_checkbox', async ({ page }) => {
    console.log("Dropdown & Checkbox Example");
    // Step 1: Launch application
    await page.goto("https://ctcorphyd.com/SureshIT/login.php");
    // Step 2: Login
    await page.locator('[name="txtUserName"]').fill("sureshit");
    await page.locator('[name="txtPassword"]').fill("sureshit");
    await page.locator('[name="Submit"]').click();
    console.log("Login Completed");
    await page.waitForTimeout(3000);
    // Step 3: Switch to frame using frameLocator
    const frame = page.frameLocator('//iframe[@name="rightMenu"]');
    console.log("Entered into Frame")
    // Step 4: Handle dropdown
    //by using visible text
    await frame.locator("//select[@id='loc_code']").selectOption('Emp. ID');
    //or
    //await frame.locator("//select[@id='loc_code']").selectOption({ label: 'Emp. ID' });
    //by using index
    //await frame.locator("//select[@id='loc_code']").selectOption(1);
    //await frame.locator("//select[@id='loc_code']").selectOption({ index: '0' });
    //by using value
    //await frame.locator("//select[@id='loc_code']").selectOption('0');
    //await frame.locator("//select[@id='loc_code']").selectOption({ value: '0' }); await page.waitForTimeout(3000);
    // Step 5: Enter value & search
    await frame.locator('[name="loc_name"]').fill("2589");
    await page.waitForTimeout(3000);
    await frame.locator('input[value="Search"]').click();
    await page.waitForTimeout(3000);
    // Step 6: Select checkbox & and click on delete button await frame.locator('[name="chkLocID[]"]').check(); await page.waitForTimeout(3000);
    await frame.locator('input[value="Delete"]').click();
    await page.waitForTimeout(3000);
    // Step 7: Logout
    await page.locator('text=Logout').click();
    await page.waitForTimeout(3000); console.log("Logout Completed");

});
test('TC_WaitStmt', async ({ page }) => {
    //--Test Steps
    await page.goto('https://ctcorphyd.com/SureshIT/login.php'); await page.waitForTimeout(3000);
    await page.locator('[name="txtUserName"]').fill('sureshit'); await page.waitForTimeout(3000);
    await page.locator('[name="txtPassword"]').fill('sureshit');
    //wait until submit button is visible and enabled (clickable)
    const loginbutton = page.locator("//input[@name='Submit']");
    await loginbutton.waitFor({ state: 'visible' });
    await loginbutton.click(); console.log('Login Completed');
    //wait for logout link is visible
    const logoutlink = page.getByRole('link', { name: 'Logout' });
    await logoutlink.waitFor({ state: 'visible' });
    await logoutlink.click(); console.log('Logout Completed');
    //wait for login page is loaded 
    await page.waitForLoadState('load');
})
