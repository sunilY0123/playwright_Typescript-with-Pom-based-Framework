import { test,chromium,firefox } from '@playwright/test'


test('test for new tab', async () => {
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

test('test for new window ', async () => {
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

test('test for 2 browser', async () => {
  
    // for 2 browser we can use 2 context
  const browser1 = await chromium.launch({headless:false})  
  const browser2 = await firefox.launch({headless:false})   
    const context1= await browser1.newContext();
    const context2= await browser2.newContext();
    const page = await context1.newPage();
    await page.goto('https://www.saucedemo.com/');
    const newWindow = await context2.newPage();
    await newWindow.goto('https://github.com'); 
    await newWindow.waitForTimeout(10000);
  })


  test('Vtiger login functionality', async () => {
    // for 2 browser with same context we can use 2 browser and 1 context
  const browser1 = await chromium.launch({headless:false})  
  
  })

