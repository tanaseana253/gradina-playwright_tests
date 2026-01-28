// @ts-check
import { test, expect } from '@playwright/test';

test('@smoke homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('BĂCĂNIA GRĂDINA CRĂCIUN')).tobevisible