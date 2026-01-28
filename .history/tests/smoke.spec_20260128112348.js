// @ts-check
import { test, expect } from '@playwright/test';

test('@smoke homepage loads', async ({ page }) => {
    await page.goto('/');
    // verifică titlul paginii
    await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).toBeVisible();
});

test('@smoke add products to cart',async ({ page}) => {
    await page)
