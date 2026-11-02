import {test} from '@playwright/test'; 
import {ConnectionPool} from 'mssql/msnodesqlv8';

test('TC_DB_Playwright', async ({page}) => {
// Database connection details
const connection = await new ConnectionPool({
  driver: 'ODBC Driver 17 for SQL Server',
  server: 'SATHISH-PC',
  database: 'students',
  options: { instanceName: 'SQLEXPRESS', trustedConnection: true },
}).connect();
console.log('Database connection established');
// Execute a query
const request = connection.request();
request.arrayRowMode = true;
const result = await request.query('SELECT * FROM Login').finally(() => connection.close());
console.log('Query executed successfully'); 
console.log(result.recordset);
// Print the results
console.log('Query Results:');
const rows = result.recordset || [];
for (let i = 0; i < rows.length; i++) {
const dbusername = rows[i][0] as string; 
const dbpassword = rows[i][1] as string;
console.log('Username from DB :', dbusername); 
console.log('Password from DB :', dbpassword);

//apply with application
await page.goto('https://ctcorphyd.com/SureshIT/login.php'); 
console.log('Application Opened');
await page.locator("//input[@name='txtUserName']").fill(dbusername); 
await page.locator("//input[@name='txtPassword']").fill(dbpassword); 
await page.waitForTimeout(3000);
console.log('Username and password entered from DB'); 
await page.locator("//input[@value='Login']").click(); 
await page.waitForTimeout(3000);
console.log('Login attempted with DB credentials');
//Logout link is shown only after a successful login
const logout = page.locator("text=Logout");
if (await logout.isVisible()) {
await logout.click();
console.log('Logout completed');
} else {
console.log('Invalid values - Username:', dbusername, 'Password:', dbpassword);
}
 }
});
