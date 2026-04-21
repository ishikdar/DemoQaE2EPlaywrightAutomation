import {test, expect} from '@playwright/test';
import {TextBoxPage} from '../pages/text-box.page';

test.describe('TextBox Page', () => {
    test('Import POM from text-box.page.ts', async ({page}) => {

        //create an object of the page class
        const textBoxPage = new TextBoxPage(page);

        //navigate to the page
        await textBoxPage.goToTextBoxPage();

        //input some value
        await textBoxPage.fullNameInput.fill('Md Al Imran Shikdar')
        await textBoxPage.emailInput.fill('mdalimranshikdar@example.com');
        await textBoxPage.currentAddressInput.fill('123 Main St, City, Country');
        await textBoxPage.permanentAddressInput.fill('456 Another St, City, Country');

        //submit the form
        await textBoxPage.submitButton.click();

        //assert the values
        await expect(textBoxPage.nameAssertion).toHaveText('Name:Md Al Imran Shikdar');

    })
})