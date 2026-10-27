//To provide Test Data & objects / elements related to whole application
import {BaseClass} from "./Baseclass";
export class Global extends BaseClass {

    //*********************Test Data ********************* */
    static url      : string = "https://sureshitacademy.in/hrms/login.php";
    static username : string = "sureshit";
    static password : string = "sureshit";
    static efn      : string = "sureshit";
    static eln      : string = "ameerpet";

    //*********************Objects / Elements ********************* */
    static textbox_loginname : string = "//input[@name='txtUserName']";
    static textbox_password  : string = "//input[@name='txtPassword']";
    static button_login      : string = "//input[@name='Submit']";
    static link_logout       : string = "//a[text()='Logout']";
    static frame_empInfo     : string = "//iframe[@id='rightMenu']";
    static button_add       : string = "//input[@value='Add']";
    static textbox_efn       : string = "//input[@name='txtEmpFirstName']";
    static textbox_eln       : string = "//input[@name='txtEmpLastName']";
    static button_save       : string = "//input[@value='Save']";

        //*********************Verification ********************* */
static expectedPageTitle : string = "SureshIT";
}