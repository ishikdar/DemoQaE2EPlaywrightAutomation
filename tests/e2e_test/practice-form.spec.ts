import {test, expect} from '@playwright/test';
import {PracticeFormPage} from '../pages/practice-form.page';

test.describe('Practice Form Page', () => {
    test('Import POM from practice-form.page.ts', async ({page}) => {

        //create an object of the page class
        const practiceFormPage = new PracticeFormPage(page);

        //navigate to the page
        await practiceFormPage.goToPracticeFormPage();

        //fill the form
        await practiceFormPage.firstNameInput.fill('Md Al Imran');
        await practiceFormPage.lastNameInput.fill('Shikdar');
        await practiceFormPage.emailInput.fill('imran@example.com');
        await practiceFormPage.genderRadioButton.check();
        await practiceFormPage.mobileNumberInput.fill('1234567890');
        
        await practiceFormPage.dateOfBirthInput.click();
        await practiceFormPage.dateOfBirthInput.fill('01 Feb 1996');
        await page.keyboard.press('Escape');

        await practiceFormPage.subjectsInput.fill('Computer Science');
        await practiceFormPage.subjectsInput.press('Tab');

        await practiceFormPage.hobbiesCheckBoxSports.click();
        await practiceFormPage.hobbiesCheckBoxReading.click();

        await practiceFormPage.pictureUploadInput.setInputFiles('tests/test_data/sample-picture.png');
        await practiceFormPage.currentAddressInput.fill('123 Main St, City, Country');

        await practiceFormPage.stateDropdown.click();
        await practiceFormPage.stateDropdown.getByText('NCR', {exact: true}).click();

        await practiceFormPage.cityDropdown.click();
        await practiceFormPage.cityDropdown.getByText('Delhi', {exact: true}).click();

        //submit the form
        await practiceFormPage.submitButton.click();

        //assert the output
        await expect(practiceFormPage.thankYouMessage).toBeVisible();

        //close the popup
        await practiceFormPage.closePopup();
        
    });
});