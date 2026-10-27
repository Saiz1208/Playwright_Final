
//To provide all methods related to whole application 
import { Global } from "./Global";
export class CommonFun extends Global {
//Open Application
static async openApplication() {
await this.page.goto(this.url);
}
//wait for few seconds 
static async waitStmt() {
await this.page.waitForTimeout(3000);
}
static async closeApplication() {
await this.page.close();
}
}