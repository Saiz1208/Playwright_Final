import { test, expect } from '@playwright/test';
import { mkdir, stat } from 'node:fs/promises';
import * as path from 'node:path';

test('Download Google logo image', async ({ page, request }) => {
  // Public Google image: no Google Photos login is required.
  const imageUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  const downloadsFolder = 'C:\\Users\\SATHISH KUMAR S\\Downloads';
  // A unique name keeps previous downloads safe.
  const fileName = `google-logo-${Date.now()}.png`;
  const filePath = path.join(downloadsFolder, fileName);

  await page.goto('https://www.google.com/');
  const response = await request.get(imageUrl);
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('image/png');
  const imageBase64 = (await response.body()).toString('base64');

  // Add a download link using the fetched image as a Blob.
  await page.evaluate(({ imageBase64, fileName }) => {
    const bytes = Uint8Array.from(atob(imageBase64), character => character.charCodeAt(0));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
    link.download = fileName;
    link.textContent = 'Download Google logo';
    link.id = 'download-google-logo';
    document.body.appendChild(link);
  }, { imageBase64, fileName });

  // Start waiting BEFORE clicking the download link.
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-google-logo').click();
  const download = await downloadPromise;

  await mkdir(downloadsFolder, { recursive: true });
  await download.saveAs(filePath);
  expect(await download.failure()).toBeNull();
  expect((await stat(filePath)).size).toBeGreaterThan(0);
  console.log(`Image saved to: ${filePath}`);
});
