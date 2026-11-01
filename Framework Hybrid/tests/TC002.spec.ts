import { test } from '@playwright/test';
import { General } from '../lib/General';

test('@smoke_TC002_Add New Employee', async ({ page }) => {
    const obj = new General(page);
    await obj.openApplication();
    await obj.waitStmt();
    await obj.login();
    await obj.waitStmt();
    await obj.addNewEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
    await obj.closeApplication();
});