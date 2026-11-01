import { test, expect } from '@playwright/test';
import { General } from '../lib/General';

test('GET Request - Get Users', async ({ page, request }) => {
    const obj = new General(page, request);
    const response = await obj.getREQ();

    console.log(response.status());
    console.log("**********************");
    const responseBody = await response.text();
    console.log(responseBody);
    console.log("**********************");
    expect(response.status()).toBe(200);
});

test('POST Request - Create User', async ({ page, request }) => {
    const obj = new General(page, request);
    const response = await obj.postREQ();

    console.log(response.status());
    console.log("**********************");
    const responseBody = await response.text();
    console.log(responseBody);
    console.log("**********************");
    expect(response.status()).toBe(201);
});