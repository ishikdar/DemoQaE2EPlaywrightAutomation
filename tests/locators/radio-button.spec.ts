import { test, expect } from "@playwright/test";
import { RadioButtonPage } from "../pages/radio-button.page";

test.describe('Radio Button Page', () => {
    test('Import POM from radio-button.page.ts', async ({page}) => {

        //create an object of the page class
        const radioButtonPage = new RadioButtonPage(page);

        //navigate to the page
        await radioButtonPage.goToRadioButtonPage();

        //select yes radio button
        await radioButtonPage.yesRadioButton.check();

        //assert the output
        await expect(radioButtonPage.outputAssertion).toHaveText('You have selected Yes');

        //select impressive radio button
        await radioButtonPage.impressiveRadioButton.check();

        //assert the output
        await expect(radioButtonPage.outputAssertion).toHaveText('You have selected Impressive');

    });
});