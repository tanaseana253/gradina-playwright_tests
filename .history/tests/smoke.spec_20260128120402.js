import { test, expect } from '@playwright/test';

// Go to homepage before each test
test.beforeEach(async ({ page }) => {
await page.goto('/');
});

// Test that homepage loads correctly
test('@smoke homepage loads', async ({ page }) => {
    await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});


test('@smoke user can login', async ({ page }) => {

  await page.getByText('Autentificare').click();

  await page.getByPlaceholder('Email').fill(process.env.TEST_EMAIL);
  await page.getByPlaceholder('Parola').fill(process.env.TEST_PASSWORD);

  await page.getByRole('button', { name: /login|autentific/i }).click();

  await expect(page.getByText(/salut/i)).toBeVisible();
});