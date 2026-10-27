import {test,devices} from '@playwright/test'
test.use(devices['Pixel 5']); 
// Set device emulation – This device emulation need to match with playwright config deveice details 
test('TC_LoginLogout' , async({page}) =>{
await page.goto("https://ctcorphyd.com/SureshIT/login.php") 
await page.waitForTimeout(3000)
console.log("Application opened")
await page.locator('[name="txtUserName"]').fill("sureshit") 
await page.locator('[name="txtPassword"]').fill("sureshit") 
await page.waitForTimeout(3000)
//await page.locator('[name="Submit"]').click() 
await page.locator('[name="Submit"]').tap(); 
await page.waitForTimeout(3000)
console.log("Login Completed")
//await page.getByRole('link',{name:'Logout'}).click() 
await page.getByRole('link',{name:'Logout'}).tap(); 
await page.waitForTimeout(3000) 
console.log("Logout completed")
}

)
