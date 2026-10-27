import {test} from '@playwright/test';

test('TC_dragdrop', async ({page}) => {
//Test Steps
await page.goto('https://jqueryui.com/droppable/'); await page.waitForTimeout(3000);
//Switch to frame
const frame = page.frameLocator('.demo-frame');
//Perform drag and drop action await page.waitForTimeout(3000); await
frame.locator('//div[@id="draggable"]').dragTo(frame.locator('//div[@id="droppable"]'));
await page.waitForTimeout(3000);
console.log("Drag and drop action performed successfully"); await page.waitForTimeout(3000);
}
);
