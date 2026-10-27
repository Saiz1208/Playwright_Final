//To Provide main page reference to all the other pages 

import { Page} from "@playwright/test";

export class BaseClass { 
    static page: Page;
    static browser: any;

}
