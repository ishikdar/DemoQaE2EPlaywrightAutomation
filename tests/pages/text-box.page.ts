import {type Locator, Page} from '@playwright/test';

export class TextBoxPage {
    private readonly textBoxPageVar: Page;

    //declare locators
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;


    //initialize locators in the constructor
    constructor(page:Page){
        this.textBoxPageVar = page;
        this.fullNameInput = page.getByRole('textbox', {name: 'Full Name'});
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.currentAddressInput = page.getByRole('textbox', {name: 'Current Address'});
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', {name: 'Submit'});

    }

    async goToTextBoxPage(){
        await this.textBoxPageVar.goto('https://demoqa.com/text-box');
    }

    async fillUpTheForm(fullName: string, email: string, currentAddress: string, permanentAddress: string){
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
        await this.submitButton.click();
    }


}