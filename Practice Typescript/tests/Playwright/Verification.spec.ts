import { test, expect } from '@playwright/test'
test('TC_LoginLogout', async ({ page }) => {
    let url: string = "https://sureshitacademy.in/hrms/login.php";
    let username: string = "sureshit";
    let password: string = "sureshit";
    await page.goto(url)
    await page.waitForTimeout(3000)
    console.log("Application opened")
    //Verify login name Text
    await expect(page.getByText('Login Name :')).toHaveText('Login Name :')
    await page.locator('[name="txtUserName"]').fill(username)
    await page.locator('[name="txtPassword"]').fill(password)
    await page.waitForTimeout(3000)
    //verify button is enable
    await expect(page.locator('[name="Submit"]')).toBeVisible();
    await page.locator('[name="Submit"]').click()
    await page.waitForTimeout(3000)
    console.log("Login Completed")
    //To get page Title
    let pageTitle = await page.title()
    console.log(pageTitle)
    //verify page title
    await expect(page).toHaveTitle(pageTitle)
    await page.getByRole('link', { name: 'Logout' }).click()
    await page.waitForTimeout(3000)
    console.log("Logout completed")
}

)
