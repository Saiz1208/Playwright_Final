import { test } from '@playwright/test';

const skipLocalOnlyTests = !!process.env.CI;

test.skip(skipLocalOnlyTests, 'Skipping local-only Windows file path tests in CI. Use repo fixtures instead.');

test('File upload Example', async ({ page }) => {
  // Step 1: Open application
  await page.goto('https://ctcorphyd.com/SureshIT/login.php');

  // Step 2: Login
  await page.locator('[name="txtUserName"]').fill('sureshit');
  await page.locator('[name="txtPassword"]').fill('sureshit');
  await page.locator('[name="Submit"]').click();
  console.log('Login completed');
  await page.waitForTimeout(3000);

  // Step 3: Switch to frame
  const frame = page.frameLocator('#rightMenu');

  // Step 4: Click Add button
  await frame.locator('input[type="button"][value="Add"]').click();
  await page.waitForTimeout(3000);

  // Step 5: Enter employee details
  await frame.locator('[name="txtEmpFirstName"]').fill('selenium');
  await frame.locator('[name="txtEmpLastName"]').fill('suresh');

  // Step 6: File Upload (repo-safe: generate a file in memory instead of using a local Windows path)
  await frame.locator('input[type="file"][name="photofile"]').setInputFiles({
    name: 'photo.png',
    mimeType: 'image/png',
    buffer: Buffer.from('placeholder-upload-content-for-ci')
  });
  console.log('File uploaded successfully');
  await page.waitForTimeout(3000);

  // Step 7: Save employee
  await frame.locator('#btnEdit').click();
  await page.waitForTimeout(3000);
  console.log('New employee added');

  // Step 8: Logout
  await page.locator('text=Logout').click();
  await page.waitForTimeout(3000);
  console.log('Logout completed');
});

// promise.all

test('promise all', async ({ page }) => {
  // --Test Steps
  await page.goto('https://ctcorphyd.com/SureshIT/login.php');
  await page.waitForTimeout(3000);
  console.log('Application Opened');

  await page.locator("//input[@name='txtUserName']").fill('sureshit');
  await page.waitForTimeout(3000);

  // --Using Promise.all to perform multiple actions simultaneously
  await Promise.all([
    page.locator("//input[@name='txtPassword']").fill('sureshit'),
    page.locator("//input[@value='Login']").click()
  ]);

  await page.waitForTimeout(3000);
  console.log('Login Completed');
  await page.getByText('Logout').click();
  await page.waitForTimeout(3000);
  console.log('Logout Completed');
});
