import { test, expect } from '@playwright/test';

// Go to homepage before each test
test.beforeEach(async ({ page }) => {
await page.goto('/');
});

// Test that verifies homepage loads successfully
test('@smoke homepage loads', async ({ page }) => {
    await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});

// Test that verifies a user can successfully log in with valid credentials
test('@smoke user can login', async ({ page }) => {

  // Go to homepage
  await page.goto('/');

  // Open login page
  await page.getByText('Autentificare').click();

  // Fill email
  await page.getByPlaceholder('Email').fill(process.env.TEST_EMAIL);

  // Fill password (exact placeholder from the page)
  await page.getByPlaceholder('Parolă').fill(process.env.TEST_PASSWORD);

  // Click login button
  await page.getByRole('button', { name: 'Intră în cont' }).click();

  // Verify login success
  await expect(page.getByText('Salut')).toBeVisible();

});