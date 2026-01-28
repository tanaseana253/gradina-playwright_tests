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

    // Open login page
    await page.getByRole('button', { name: 'Autentificare' }).first().click();

    // wait until login page loads
    await expect(page).toHaveURL(/login/);

    // Fill email from environment variables
    await page.getByPlaceholder('Email').fill(process.env.TEST_EMAIL);

    // Fill password from environment variables
    await page.getByPlaceholder('Parol[a]').fill(process.env.TEST_PASSWORD);

    // Submit login form
    await page.getByRole('button', { name: 'Intră în cont' }).click();

    // Verify user is logged in by checking greeting text
    await expect(page.getByText(/salut/i)).toBeVisible();

});

