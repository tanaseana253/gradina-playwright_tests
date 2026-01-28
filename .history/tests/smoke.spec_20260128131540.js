import { test, expect } from '@playwright/test';

// Go to homepage before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Homepage loads
test('@smoke homepage loads', async ({ page }) => {
  await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});

// User login
test('@smoke user can login', async ({ page }) => {

  // Open login page (click the visible "Autentificare")
    await page.locator('text=Autentificare:visible').click();

  // Fill email
  await page.getByPlaceholder('Email').fill(process.env.TEST_EMAIL);

  // Fill password
  await page.getByPlaceholder('Parolă').fill(process.env.TEST_PASSWORD);

  // Submit login
  await page.getByRole('button', { name: 'Intră în cont' }).click();

  // Check login success
  await expect(page.getByText('Salut')).toBeVisible();
});

test('@smoke add product to cart', async ({ page }) => {
    await page.locator('button:has(.bi-plus)').first().click();
  await expect(page.getByText('Comanda ta')).toBeVisible();
});