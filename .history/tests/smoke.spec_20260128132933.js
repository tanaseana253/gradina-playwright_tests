import { test, expect } from '@playwright/test';

// Go to homepage before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Homepage loads
test('@smoke homepage loads', async ({ page }) => {
  await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});

test('@smoke user can login', async ({ page }) => {

  await page.goto('/store/login/');

  await page.getByPlaceholder('Email')
    .fill(process.env.TEST_EMAIL);

  await page.getByPlaceholder('Parolă')
    .fill(process.env.TEST_PASSWORD);

  await page.getByRole('button', { name: 'Intră în cont' }).click();

  await expect(page.getByText(/Salut/i)).toBeVisible();
});

test('@smoke add product to cart', async ({ page }) => {
  await page.locator('button:has(.bi-plus)').first().click();
  await expect(page.getByRole('heading', { name: 'Comanda ta' })).toBeVisible();
});