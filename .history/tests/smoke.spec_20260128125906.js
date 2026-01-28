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
    await page.getByText('Autentificare').click();

  // Fill email
    await page.getByPlaceholder('Email').fill(process.env.TEST_EMAIL);

  // Fill password
    await page.getByPlaceholder('Parolă').fill(process.env.TEST_PASSWORD);

  // Click login button
    await page.getByRole('button', { name: 'Intră în cont' }).click();

  // Verify login success
    await expect(page.getByText('Salut')).toBeVisible();
});

// Test that verifies a product can be added to cart
test('@smoke add product to cart', async ({ page }) => {

  // Click first "+" button (add product)
    await page.getByRole('button', { name: '+' }).first().click();

  // Verify cart area has at least one product (simple check)
    await expect(page.getByText('Comanda ta')).toBeVisible();

  // Optional: check a known product appears (change if needed)
    await expect(page.getByText('Ardei gras')).toBeVisible();
    
});