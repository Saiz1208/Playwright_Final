//To provide objects / elements & methods related to login page 
import{CommonFun} from "../utils/Commonfun";
export class LoginPage extends CommonFun {


  static async login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login completed");
  }
}
