import {checkBoxFixture, expect} from '../fixtures/fixture.ts';

checkBoxFixture.describe('CheckBox Page', () => {
    checkBoxFixture('should handle checkbox tests properly', async ({checkBoxPage, page}) => {

        
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
        await expect(page.getByText('You have selected')).toBeVisible();

    });
});