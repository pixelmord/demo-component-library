import { expect, test } from './test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const table = await page.getByRole('table');

  await expect(table).toBeVisible();
});
