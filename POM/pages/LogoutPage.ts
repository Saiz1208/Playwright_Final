//To provide objects / elements & methods related to logout page 
import { CommonFun } from "../utils/Commonfun";

export class LogoutPage extends CommonFun {
//objects / elements
static button_logout = "//a[text()='Logout']";
//methods
static async logout() {
await this.page.locator(this.button_logout).click(); 
console.log("Logout completed");
}
}
