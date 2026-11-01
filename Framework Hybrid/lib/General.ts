//To provide all re-usable methods / functions related to whole application
import {Global} from './Global';

export class General extends Global {
    //user-defined methods

async openApplication() {
await this.page.goto(this.url);
console.log("Application opened");
}
async login() {
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login successful");
console.log("Login Completed");
}
async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
async addNewEmployee() {
    const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_efn).fill(this.efn);
    await frame.locator(this.textbox_eln).fill(this.eln);
    await frame.locator(this.button_save).click();
    console.log("New employee added successfully");
}    
async waitStmt() {
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");
}  
async closeApplication() {
    await this.page.close();
    console.log("Application closed");  
}
}