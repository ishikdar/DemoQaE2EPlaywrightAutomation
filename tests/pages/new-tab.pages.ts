import {Locator, Page} from '@playwright/test';

export class NewTabPage {
    private readonly newTabPageVar: Page;

    //declare locators
    readonly newTabButton: Locator;
    readonly newTabTitle: Locator;

    //initialize locators in the constructor
    constructor(page: Page) {
        this.newTabPageVar = page;
        this.newTabButton = page.getByRole('button', {name: 'New Tab'});
        this.newTabTitle = page.getByRole('heading', {name: 'This is a sample page'});
    }

    async goToNewTabPage() {
        await this.newTabPageVar.goto('https://demoqa.com/browser-windows');
    }
}