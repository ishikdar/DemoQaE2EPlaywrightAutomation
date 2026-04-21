import { type Locator, Page } from '@playwright/test';

export class RadioButtonPage {
    private readonly radioButtonPageVar: Page;

    //declare locators
    readonly yesRadioButton: Locator;
    readonly impressiveRadioButton: Locator;

    //assertion elements
    readonly outputAssertion: Locator;

    //initialize locators in the constructor
    constructor(page: Page) {
        this.radioButtonPageVar = page;
        this.yesRadioButton = page.getByLabel('Yes');
        this.impressiveRadioButton = page.getByLabel('Impressive');

        //initialize assertion elements
        this.outputAssertion = page.getByText('You have selected')

    }

    async goToRadioButtonPage() {
        await this.radioButtonPageVar.goto('https://demoqa.com/radio-button');
    }

}