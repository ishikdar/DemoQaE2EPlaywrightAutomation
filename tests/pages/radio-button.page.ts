import { type Locator, Page } from '@playwright/test';

export class RadioButtonPage {
    private readonly radioButtonPageVar: Page;

    //declare locators
    readonly yesRadioButton: Locator;
    readonly impressiveRadioButton: Locator;

    //initialize locators in the constructor
    constructor(page: Page) {
        this.radioButtonPageVar = page;
        this.yesRadioButton = page.getByLabel('Yes');
        this.impressiveRadioButton = page.getByLabel('Impressive');


    }

    async goToRadioButtonPage() {
        await this.radioButtonPageVar.goto('https://demoqa.com/radio-button');
    }

}