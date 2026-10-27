import { test, expect } from "@playwright/test";
import { Workbook } from "exceljs";
import { join } from "node:path";

test("create login using Excel data", async ({ page }) => {
    // 1. Open the Excel file
    const workbook = new Workbook();
    const excelFilePath = join(__dirname, "Test Data", "username.xlsx");
    await workbook.xlsx.readFile(excelFilePath);

    // 2. Get the worksheet
    const sheet = workbook.getWorksheet("Sheet1");

    if (!sheet) {
        throw new Error("Sheet1 worksheet was not found");
    }

    // 3. Read the first data row
    const row = sheet.getRow(2);

    const username = row.getCell(1).text;
    const password = row.getCell(2).text;

    if (!username || !password) {
        throw new Error("Sheet1 row 2 must contain a username in column A and a password in column B");
    }

    // 4. Use the data in the browser
    await page.goto("https://sureshitacademy.in/hrms/login.php");

    await page.locator('[name="txtUserName"]').fill(username)
    await page.locator('[name="txtPassword"]').fill(password)
    console.log(`Username: ${username} and Password: ${password} filled successfully`);
    await page.locator('[name="Submit"]').click()

    //5.Click on Logout link
    await page.getByRole('link', { name: 'Logout' }).click();
    console.log('Logout Completed');
});
