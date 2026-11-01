import {test, expect} from '@playwright/test';

function getApiKey(): string {
  const apiKey = process.env.REQRES_API_KEY?.trim();
  if (!apiKey || apiKey === 'your_reqres_api_key') {
    throw new Error('Set REQRES_API_KEY in POM/.env or your environment before running API tests.');
  }
  return apiKey;
}

test('TC_REQ_Chaining',async({request})=>{
//--Test Steps
const response = await request.post("https://reqres.in/api/users",{ 
data:{
name: "suresh", 
job: "Trainer"
},
headers: {
'x-api-key': getApiKey(), 
'Content-Type' : 'application/json'
} ,
});

//get status code
console.log("Status code is: "+response.status());
//get response body
const responseBody = await response.text(); 
console.log("Response body is: "+responseBody);
//verify status code 
expect(response.status()).toBe(201);
//Extract id from response body
const responsebodyjson = await response.json(); 
const id = responsebodyjson.id; 
console.log("Extracted id is: "+id);
//Delete the created ID 
const deleteResponse = await
request.delete(`https://reqres.in/api/users/${id}`,{ 
headers: {
'x-api-key': getApiKey()
}
});
//get status code
console.log("Status code is: "+deleteResponse.status());
//get response body
const deleteResponseBody = await deleteResponse.text();
console.log("Response body is: "+deleteResponseBody);
//verify status code 
expect(deleteResponse.status()).toBe(204);

});
