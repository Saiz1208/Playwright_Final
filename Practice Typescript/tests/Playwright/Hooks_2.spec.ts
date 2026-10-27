import { test } from '@playwright/test';

test.beforeAll(async () => {
   console.log("Open Application");
});
test.afterAll(async () => {
   console.log("Close Application");
});
test.beforeEach(async () => {
    console.log("Login ");
});
test.afterEach(async () => {
    console.log("Logout");
});
test('Add New Employee', async () => {
    console.log("New employee added successfully");
});
test('@smoke_Delete Employee', async () => {
    console.log("Deleted employee successfully");
});