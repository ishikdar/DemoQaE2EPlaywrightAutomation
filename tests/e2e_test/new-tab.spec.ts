import {newTabFixture, expect} from '../fixtures/fixture';

newTabFixture.describe('New Tab Page Tests', () => {
    newTabFixture('should open a new tab and verify its content', async ({ newTabPage, page }) => {
        // Listen for the new tab to open
        const newTabPromise = page.context().waitForEvent('page');
        
        // Click the button to open a new tab
        await newTabPage.newTabButton.click();

        // Wait for the new tab to open and switch to it
        const newTab = await newTabPromise;
        await newTab.waitForLoadState();

        // Verify the content of the new tab
        await expect(newTab.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
    });
});