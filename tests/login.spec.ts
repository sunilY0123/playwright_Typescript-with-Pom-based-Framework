import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


test.beforeEach(async({page})=>{
 let loginPage = new LoginPage(page);
     await page.waitForLoadState('load');
     await page.goto('http://localhost:8888/');
     await loginPage.validLogin();
})



test('navigate to home page', async ({page}) => {
     let homePage = new HomePage(page);
     await homePage.verifyLandingHomePage();
     // await page.waitForLoadState('networkidle');
     await page.screenshot({ path: 'screenshots/homePage.png' });
});