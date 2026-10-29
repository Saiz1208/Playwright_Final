import {test, expect} from '@playwright/test';

test('TC_REQ_Chaining',async({request})=>{
//--Test Steps
const response = await request.post("https://reqres.in/api/users",{ 
data:{
name: "suresh", 
job: "Trainer"
},
headers: {
'x-api-key': 'reqres_de47f7fa069f46e48159d183e78316d5', 
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
'x-api-key': 'reqres_de47f7fa069f46e48159d183e78316d5'
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
