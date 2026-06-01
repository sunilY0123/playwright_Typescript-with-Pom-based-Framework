    import {test, expect,Page} from '@playwright/test';


    export class HomePage {
    page: Page;

    constructor(page: Page) {
    this.page = page;
    }

    async verifyLandingHomePage() {
    const actualTitle = await this. page.title();
    console.log('=================================');
    console.log('ACTUAL PAGE TITLE:', actualTitle);
    console.log('=================================');
    
    // Take screenshot
    // await this.page.screenshot({ path: 'screenshots/actual-page.png', fullPage: true });
    await expect(actualTitle).toEqual('admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM');
    // await this.page.screenshot({ path: 'screenshots/homePage.png' , timeout: 5000 });

    }   

}

