//To provide Test Data & objects / elements related to whole application
import {APIRequestContext, Page} from '@playwright/test';
export class Global {
    constructor(public page: Page, public request: APIRequestContext) {

    }

    //*********************Test Data ********************* */
    public url      : string = "https://sureshitacademy.in/hrms/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";
    public efn      : string = "sureshit";
    public eln      : string = "ameerpet";
     // API URLs
    protected getUrl: string = "https://reqres.in/api/users/2";
    protected postUrl: string = "https://reqres.in/api/users";
    protected deleteUrl: string = "https://reqres.in/api/users/2";
    // Common Headers
    protected headers = {
        "x-api-key": "reqres_5e1d81327e0c4c3caee12839278e49ce",
        "Content-Type": "application/json"
    };
    //Data for POST request
     data = {
        name: "Suresh",
        job : "Trainer"
    };

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