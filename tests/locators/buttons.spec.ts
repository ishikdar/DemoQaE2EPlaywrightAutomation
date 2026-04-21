import {expect, test} from '@playwright/test';
import {ButtonsPage} from '../pages/buttons.page';

test.describe('Buttons Page', () => {
    test('Import POM from buttons.page.ts', async ({page}) => {
        //create an object of the page class
        const buttonsPage = new ButtonsPage(page);

        //navigate to the page
        await buttonsPage.goToButtonsPage();

        //double click the button
        await buttonsPage.doubleClickButton.dblclick();

        //assert the output of double click
        await expect(buttonsPage.doubleClickAssertion).toBeVisible();

        //right click button
        await buttonsPage.rightClickButton.click({button: 'right'});

        //assert the output of right click
        await expect(buttonsPage.rightClickAssertion).toBeVisible();

        //click the click me button
        await buttonsPage.clickMeButton.click();

        //assert the output of click me button
        await expect(buttonsPage.clickMeAssertion).toBeVisible();

    })

});