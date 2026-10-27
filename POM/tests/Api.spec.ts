//GET Request
import {test, expect} from '@playwright/test'; 
import * as process from 'node:process';
function getApiKey(): string {
  const apiKey = process.env.REQRES_API_KEY?.trim();
  if (!apiKey || apiKey === 'your_reqres_api_key') {
    throw new Error('Set REQRES_API_KEY in POM/.env or your environment before running API tests.');
  }
  return apiKey;
}

test('GET request', async ({request}) => {
const response = await request.get('https://reqres.in/api/users/1',
{
headers: {
'x-api-key': getApiKey()
}
});
// response status code
const statuscode = response.status();
console.log('Status Code:', statuscode);
console.log("===============================");
//Response body
const responseBody = await response.text(); 
console.log('Response Body:', responseBody);
//Assertions 
expect(statuscode).toBe(200);
}
);

//POST Request

test('POST request', async ({request}) => { const data = {
"name": "SureshIT",
"Role": "Trainer"
}
const response = await request.post('https://reqres.in/api/users',
{
headers: {
'x-api-key': getApiKey(), 'Content-Type': 'application/json'
},
data: data
}
);
// response status code
const statuscode = response.status(); 
console.log('Status Code:', statuscode);
console.log("===============================");
//Response body
const responseBody = await response.text(); 
console.log('Response Body:', responseBody);
//Assertions 
expect(statuscode).toBe(201);
}
);

//PUT Request
test('PUT request', async ({request}) => { const data = {
"name": "SureshIT", "Role": "Software Trainer"
}
const response = await request.put('https://reqres.in/api/users/2',
{
headers: {
'x-api-key': getApiKey(), 'Content-Type': 'application/json'
},
data: data
}
);
// response status code
const statuscode = response.status(); 
console.log('Status Code:', statuscode);
console.log("===============================");
//Response body
const responseBody = await response.text(); 
console.log('Response Body:', responseBody);
//Assertions 
expect(statuscode).toBe(200);
}
);

//DELETE Request
test('DELETE request', async ({request}) => {
const response = await request.delete('https://reqres.in/api/users/2',
{
headers: {
'x-api-key': getApiKey()
}
});
// response status code
const statuscode = response.status(); 
console.log('Status Code:', statuscode);
console.log("===============================");
//Response body
const responseBody = await response.text(); 
console.log('Response Body:', responseBody);
//Assertions 
expect(statuscode).toBe(204);
});
