import { test } from '@playwright/test';

const skipLocalOnlyTests = !!process.env.CI;

test.describe('local file tests', () => {
  test.skip(skipLocalOnlyTests, 'Skipping local Windows file path tests in CI. Use repo fixtures instead.');

  test('TC_MultipleWindows', async ({ browser }) => {
    // Create browser context
    const context = await browser.newContext();
    // 1st window (parent)
    const page1 = await context.newPage();
    await page1.goto('file:///C:/Users/SATHISH%20KUMAR%20S/Downloads/multiplewindows.html');
    console.log('1st window opened');
    await page1.waitForTimeout(3000);
    // 2nd window
    const [page2] = await Promise.all([
      context.waitForEvent('page'),
      page1.click('#btn2')
    ]);
    await page2.waitForLoadState();
    console.log('2nd window opened');
    await page2.waitForTimeout(3000);
    // 3rd window
    const [page3] = await Promise.all([
      context.waitForEvent('page'),
      page1.click('#btn3')
    ]);
    await page3.waitForLoadState();
    console.log('3rd window opened');
    await page3.waitForTimeout(3000);
    // navigate to 2nd window
    await page2.bringToFront();
    console.log('Navigated to 2nd window');
    await page2.waitForTimeout(3000);
    // navigate to 3rd window
    await page3.bringToFront();
    console.log('Navigated to 3rd window');
    await page3.waitForTimeout(3000);
  });

  test('TC_WebTable', async ({ page }) => {
    console.log('WebTable Handling Example');
    // open local HTML file
    await page.goto('file:///C:/Users/SATHISH%20KUMAR%20S/Downloads/WebTable.html');
    await page.waitForTimeout(3000);
    // Count
    const rowcount = await page.locator("//*[@id='idCourse']/tbody/tr").count();
    const colcount = await page.locator("//*[@id='idCourse']/tbody/tr[1]/td").count();
    const row_colcount = await page.locator("//*[@id='idCourse']/tbody/tr/td").count();
    console.log('Row Count is ' + rowcount);
    console.log('Column Count is ' + colcount);
    console.log('Row and Column Count is ' + row_colcount);
    await page.waitForTimeout(3000);
    // ----------Cell Data (Row 2, Column 2) ----------
    const celldata = await page.locator("//*[@id='idCourse']/tbody/tr[2]/td[2]").textContent();
    console.log('Cell Data is ' + celldata?.trim());
    await page.waitForTimeout(3000);
    // ----------Whole Table Data ----------
    for (let i = 1; i <= rowcount; i++) {
      const tabledata = await page.locator("//*[@id='idCourse']/tbody/tr[" + i + "]").innerText();
      console.log(tabledata?.trim());
    }
  });
});
