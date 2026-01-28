import { test, expect } from '@playwright/test';

// Go to homepage before each test
test.beforeEach(async ({ page }) => {
await page.goto('/');
});

// Test that homepage loads correctly
test('@smoke homepage loads', async ({ page }) => {
    await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});

test('@smoke add products to cart',async ({ page}) => {
    await page.goto('/');
    // apasa primul buton
    await expect(page.getByRole('button', {}))
