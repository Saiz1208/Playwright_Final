import { test, expect } from "@playwright/test";

test("TC_Login", async ({ page }) => {
  console.log("Project Name: HRMS");
  console.log("---------------------------------");

  await page.goto("https://sureshitacademy.in/hrms/login.php");
  const pageTitle = await page.title();
  console.log("Project URL: " + page.url());
  console.log("---------------------------------");

  console.log("Project Page Title: " + pageTitle);
  console.log("Page Launched Successfully");
  console.log("---------------------------------");
  await page
    .locator("//input[@name='txtUserName'][@class='loginText']")
    .fill("sureshit");
  await page
    .locator("//input[@name='txtPassword'][@class='loginText']")
    .fill("sureshit");

  const loginName = await page
    .locator("//td[text()='Login Name : ']")
    .textContent();
  console.log("The Located Value is " + loginName);
  console.log("---------------------------------");


  await page.locator("//input[@name='Submit']").click();
  console.log("Login Successful");
  console.log("---------------------------------");


  const welcome = await page
    .locator("//li[text()='Welcome sureshit']")
    .textContent();
  console.log("The Located Value is " + welcome);
  console.log("---------------------------------");

  // Enter into Frame
//
const frame = page.frameLocator('//iframe[@name="rightMenu"]');
console.log("Frame Entered Successfully");
// Click Add Button
//
await frame.locator('input[value="Add"][type="button"]').click(); await page.waitForTimeout(3000);
console.log("Clicked on Add Button Successfully");
  // // MouseOver on "PIM"
  // await page.locator('text=PIM').hover(); 
  // console.log('Mouseover on PIM Completed'); 
  
  // //  Click on "Add Employee" submenu
  
  // await page.locator('text=Add Employee').click(); 
  // console.log('Clicked on Add Employee submenu'); 

  // await page
  //   .frameLocator("iframe")
  //   .locator("select#loc_code")
  //   .selectOption("Emp. ID");

  // console.log("DropDown Option selected successfully");
  // console.log("---------------------------------");
  // console.log("Test Case TC_Login executed successfully");

});
