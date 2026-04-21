import {test, expect} from '@playwright/test';
import {CheckBoxPage} from '../pages/checkbox.page';

test.describe('CheckBox Page', () => {
    test('Import POM from checkbox.page.ts', async ({page}) => {

        //create an object of the page class
        const checkBoxPage = new CheckBoxPage(page);

        //navigate to the page
        await checkBoxPage.goToCheckBoxPage();
        
        //expand all folders
        await checkBoxPage.homePlusIcon.click();
        await checkBoxPage.desktopPlusIcon.click();
        await checkBoxPage.documentsPlusIcon.click();
        await checkBoxPage.downloadsPlusIcon.click();

        //select checkboxes
        await checkBoxPage.desktopCheckBox.check();
        await checkBoxPage.documentsCheckBox.check();
        await checkBoxPage.downloadsCheckBox.check();

        //assert the output
        await expect(checkBoxPage.outputAssertion).toBeVisible();

    });
});