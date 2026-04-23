import { type Locator, Page } from '@playwright/test';

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

    //initialize locators in the constructor
    constructor(page: Page) {
        this.practiceFormPageVar = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.genderRadioButton = page.getByRole('radio', { name: 'Male', exact: true });
        this.mobileNumberInput = page.getByPlaceholder('Mobile Number');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');

        this.hobbiesCheckBoxSports = page.getByText('Sports');
        this.hobbiesCheckBoxReading = page.getByText('Reading');

        this.pictureUploadInput = page.locator('#uploadPicture');
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });

        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

    }

    async goToPracticeFormPage() {
        await this.practiceFormPageVar.goto('https://demoqa.com/automation-practice-form');
    }

    async fillUpTheForm(firstName: string, lastName: string, email: string, mobileNumber: string, dateOfBirth: string, subjects: string[], hobbiesCheckBoxSports: string, hobbiesCheckBoxReading: string, pictureUploadInput: string, currentAddressInput: string, state: string, city: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.genderRadioButton.check();
        await this.mobileNumberInput.fill(mobileNumber);
        await this.dateOfBirthInput.click();
        await this.dateOfBirthInput.fill(dateOfBirth);
        await this.practiceFormPageVar.keyboard.press('Escape');

        for (const subject of subjects) {
            await this.subjectsInput.fill(subject);
            await this.subjectsInput.press('Tab');
        }

        await this.hobbiesCheckBoxSports.click();
        await this.hobbiesCheckBoxReading.click();

        await this.pictureUploadInput.setInputFiles(pictureUploadInput);
        await this.currentAddressInput.fill(currentAddressInput);

        await this.stateDropdown.click();
        await this.stateDropdown.getByText(state, { exact: true }).click();
        await this.cityDropdown.click();
        await this.cityDropdown.getByText(city, { exact: true }).click();

        await this.submitButton.click();
    }

    async closePopup() {
        await this.practiceFormPageVar.mouse.click(0, 0);
    }
}