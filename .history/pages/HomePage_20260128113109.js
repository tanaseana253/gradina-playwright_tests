import { expect } from '@playwright/test';

export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.title = page.getByText('Băcănia Grădina Crăciun');
    this.addFirstProductBtn = page.getByRole('button', { name: '+' }).first();
    this.totalRon = page.getByText('RON').first();
    this.inStockFilterBtn = page.getByRole('button', { name: /în stoc/i });
    this.outOfStockText = page.getByText('Stoc epuizat');
  }

  async goto() {
    await this.page.goto('/');
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.addFirstProductBtn.click();
  }

  async expectTotalNotZero() {
    await expect(this.totalRon).not.toContainText('0.00');
  }

  async filterInStock() {
    await this.inStockFilterBtn.click();
  }

  async expectNoOutOfStockItems() {
    await expect(this.outOfStockText).toHaveCount(0);
  }
}