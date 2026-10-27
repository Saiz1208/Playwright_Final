//To provide verification methods related to whole application 
import {expect} from "@playwright/test"; 
import { CommonFun } from "../utils/Commonfun";

export class VerifyPage extends CommonFun {
static async verifyPageTitle() {
    console.log("Page title is : " + await this.page.title());
    await expect(this.page).toHaveTitle(this.expectedPageTitle);
    console.log("Page title verified");
}
}
