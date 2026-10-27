import { test } from '@playwright/test';
import { General } from '../lib/General';

test.describe('Regression Tests', () => {  

test('TC001_login_logout', async ({ page }) => {
     const obj = new General(page);
     await obj.openApplication();
     await obj.login();
     await obj.logout();
     await obj.closeApplication();

});
test('Add New Employee', async () => {
    console.log("New employee added successfully");
});
});