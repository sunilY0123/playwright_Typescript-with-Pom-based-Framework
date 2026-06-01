import {test, expect,Page} from '@playwright/test';


 export class LoginPage {
   page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async validLogin() {
       
        await this.page.locator("[name='user_name']").fill('admin');
        await this.page.locator("[name='user_password']").fill("admin")
        await this.page.locator("[name='Login']").click();
    }

    async invalidLogin() {
     
        await this.page.locator("[name='user_password']").fill("admin")
        await this.page.locator("[name='Login']").click();
        await expect(this.page.getByRole('cell', { name: 'You must specify a valid username and password.', exact: true })).toBeVisible();
    }
}