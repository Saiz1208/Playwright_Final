//To provide actual automation script for the test cases 
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { VerifyPage } from "../pages/Verification";
import { BaseClass } from "../utils/Baseclass";
import { CommonFun } from "../utils/Commonfun";

test('TC001', async ({ page }) => { BaseClass.page = page;
await CommonFun.openApplication();
await CommonFun.waitStmt();
await LoginPage.login();
await CommonFun.waitStmt();
await VerifyPage.verifyPageTitle();
await CommonFun.waitStmt();
await LogoutPage.logout();
await CommonFun.waitStmt();
await CommonFun.closeApplication();
});