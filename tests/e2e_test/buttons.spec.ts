import {buttonsFixture, expect} from '../fixtures/fixture.ts';

buttonsFixture.describe('Buttons Page', () => {
    buttonsFixture('should handle button clicks properly', async ({buttonsPage, page}) => {


        //double click the button
        await buttonsPage.doubleClickButton.dblclick();

        //assert the output of double click
        await expect(page.getByText('You have done a double click')).toBeVisible();

        //right click button
        await buttonsPage.rightClickButton.click({button: 'right'});

        //assert the output of right click
        await expect(page.getByText('You have done a right click')).toBeVisible();

        //click the click me button
        await buttonsPage.clickMeButton.click();

        //assert the output of click me button
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();

    })

});