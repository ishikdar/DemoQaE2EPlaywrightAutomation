import {hoverFixture, expect} from '../fixtures/fixture.ts';

hoverFixture.describe('Hover Page', () => {
    hoverFixture('Import POM from hover.pages.ts', async ({hoverPage}) => {

        //hover to the second menu item
        await hoverPage.menuItem2.hover();

        //assert the sub menu items are visible
        await expect(hoverPage.subSubListButton).toBeVisible();


        //hover to the sub sub list button
        await hoverPage.subSubListButton.hover();

        //assert the sub sub list items are visible
        await expect(hoverPage.subSubListItem1).toBeVisible();
        await expect(hoverPage.subSubListItem2).toBeVisible();
    })

});