import { radioButtonFixture, expect } from "../fixtures/fixture.ts";

radioButtonFixture.describe('Radio Button Page', () => {
    radioButtonFixture('should select yes and show correct text', async ({radioButtonPage, page}) => {
        //select yes radio button
        await radioButtonPage.yesRadioButton.check();

        //assert the output
        await expect(page.getByText('You have selected')).toHaveText('You have selected Yes');

        //select impressive radio button
        await radioButtonPage.impressiveRadioButton.check();

        //assert the output
        await expect(page.getByText('You have selected')).toHaveText('You have selected Impressive');

    });
});