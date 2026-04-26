import {Locator, Page} from '@playwright/test';

export class AlertsPage {
    readonly page: Page;
    readonly alertButton: Locator
    readonly delayButton: Locator
    readonly confirmButton: Locator
    readonly promptButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.alertButton = page.locator('#alertButton');
        this.delayButton = page.locator('#timerAlertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promtButton');
    }

    async goToAlertsPage() {
        await this.page.goto('https://demoqa.com/alerts');
    }
}