import { test, expect } from '@playwright/test';
import { HoverPage } from '../pages/hover.pages';

test.describe('Hover Page', () => {
    test('Import POM from hover.pages.ts', async ({ page }) => {

        //create an object of the page class
        const hoverPage = new HoverPage(page);

        //navigate to the page
        await hoverPage.goToHoverPage();

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