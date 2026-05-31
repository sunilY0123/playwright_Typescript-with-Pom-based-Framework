import { test,chromium,firefox } from '@playwright/test'


test('test browser with chromium', async () => {
// for new tab we can use new page
const browser = await chromium.launch({headless:false})
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.saucedemo.com/');
const newTab = await context.newPage();
await newTab.goto('https://github.com');
})


test.use({
  headless: false
});

test('launch browser with firefoxBrowser', async () => {
// for new window we can use new context

  const browser = await firefox.launch()  
  const context1= await browser.newContext();
   const context2= await browser.newContext();
  const page = await context1.newPage();
  await page.goto('https://www.saucedemo.com/');
 
  const newWindow = await context2.newPage();
  await newWindow.goto('https://github.com'); 
  
  await newWindow.waitForTimeout(10000);
  
})



