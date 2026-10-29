import { test, expect } from '@playwright/test';

test('TC_REQ_GET_20_Series ', async ({ request }) => {
    //--Test Steps
    const totalrequest = 20;
    //create 20 concurrent requests 
    const responses = await Promise.all(
        Array.from({ length: totalrequest }, () => request.get("https://reqres.in/api/users/1", {
            headers: {
                'x-api-key': 'reqres_de47f7fa069f46e48159d183e78316d5'
            }
        }))
    );
    //validate all responses 
    for (let i = 0; i < totalrequest; i++) {
        const response = responses[i];
        //get status code
        const statusCode = response.status();
        console.log(`Response ${i + 1} status code: ${statusCode}`);
        //get response body
        const responseBody = await response.text();
        console.log(`Response ${i + 1} body: ${responseBody}`);
        //validate status code
        expect(statusCode).toBe(200);
    }
});
