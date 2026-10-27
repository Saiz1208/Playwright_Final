//To provide Test Data & objects / elements related to whole application
import {Page} from '@playwright/test';
export class Global {
      constructor(public page: Page) {

      }
    //*********************Test Data ********************* */
    public url      : string = "https://sureshitacademy.in/hrms/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";
    public efn      : string = "sureshit";
    public eln      : string = "ameerpet";

    //*********************Objects / Elements ********************* */
    public textbox_loginname : string = "//input[@name='txtUserName']";
    public textbox_password  : string = "//input[@name='txtPassword']";
    public button_login      : string = "//input[@name='Submit']";
    public link_logout       : string = "//a[text()='Logout']";
    public frame_empInfo     : string = "//iframe[@id='rightMenu']";
    public button_add       : string = "//input[@value='Add']";
    public textbox_efn       : string = "//input[@name='txtEmpFirstName']";
    public textbox_eln       : string = "//input[@name='txtEmpLastName']";
    public button_save       : string = "//input[@value='Save']";
}