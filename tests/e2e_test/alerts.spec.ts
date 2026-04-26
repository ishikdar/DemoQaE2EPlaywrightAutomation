import { alertsFixture, expect } from '../fixtures/fixture.ts';


alertsFixture.describe('Alerts tests', () => {

// This test will handle simple alert
    alertsFixture('should handle simple alert', async ({ alertsPage, page }) => {

        page.once('dialog', async alert => {
            expect(alert.type()).toBe('alert');
            expect(alert.message()).toBe('You clicked a button');
            await alert.accept();
        });

        await alertsPage.alertButton.click();
    });

// This test will handle delayed alert
    alertsFixture('should handle delayed alert', async ({ alertsPage, page }) => {

        page.once('dialog', async alert => {
            expect(alert.type()).toBe('alert');
            expect(alert.message()).toBe('This alert appeared after 5 seconds');
            await alert.accept();
        });

        await alertsPage.delayButton.click();
    });

// This test will handle confirm alert with confirm response
    alertsFixture('should handle confirm alert with confirm response', async ({ alertsPage, page }) => {

        page.once('dialog', async alert => {
            expect(alert.type()).toBe('confirm');
            expect(alert.message()).toBe('Do you confirm action?');
            await alert.accept();
        });

        await alertsPage.confirmButton.click();

        //assert the output of confirm button
        await expect(page.getByText('You selected Ok')).toBeVisible();
    });

// This test will handle confirm alert with cancel response

    alertsFixture('should handle confirm alert with cancel response', async ({ alertsPage, page }) => {

        page.once('dialog', async alert => {
            expect(alert.type()).toBe('confirm');
            expect(alert.message()).toBe('Do you confirm action?');
            await alert.dismiss();
        });

        await alertsPage.confirmButton.click();

        //assert the output of confirm button
        await expect(page.getByText('You selected Cancel')).toBeVisible();

    });

// This test will handle prompt alert with input response

    alertsFixture('should handle prompt alert', async ({ alertsPage,page }) => {

        page.once('dialog', async alert => {
            expect(alert.type()).toBe('prompt');
            expect(alert.message()).toBe('Please enter your name');
            await alert.accept('imran');
        });
        await alertsPage.promptButton.click();

        //assert the output of prompt button
        await expect(page.getByText('You entered imran')).toBeVisible();
    });
});