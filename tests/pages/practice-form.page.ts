import {type Locator, Page} from '@playwright/test';

export class PracticeFormPage {
    private readonly practiceFormPageVar: Page;

    //declare locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator
    readonly genderRadioButton: Locator;
    readonly mobileNumberInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectsInput: Locator;
    readonly hobbiesCheckBoxSports: Locator;
    readonly hobbiesCheckBoxReading: Locator;
    readonly pictureUploadInput: Locator;
    readonly currentAddressInput: Locator;
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;
    readonly submitButton: Locator;

    //assertion elements
    readonly thankYouMessage: Locator;


    //initialize locators in the constructor
    constructor(page:Page){
        this.practiceFormPageVar = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.genderRadioButton = page.getByRole('radio', {name: 'Male',exact: true});
        this.mobileNumberInput = page.getByPlaceholder('Mobile Number');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');

        this.hobbiesCheckBoxSports = page.getByRole('checkbox', {name: 'Sports'});
        this.hobbiesCheckBoxReading = page.getByRole('checkbox', {name: 'Reading'});

        this.pictureUploadInput = page.locator('#uploadPicture');
        this.currentAddressInput = page.getByRole('textbox', {name: 'Current Address'});

        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
        this.submitButton = page.getByRole('button', {name: 'Submit'});


        //initialize assertion elements
        this.thankYouMessage = page.getByText('Thanks for submitting the form');

    }

    async goToPracticeFormPage(){
        await this.practiceFormPageVar.goto('https://demoqa.com/automation-practice-form');
    }

    async closePopup(){
        await this.practiceFormPageVar.mouse.click(0,0);
    }
}