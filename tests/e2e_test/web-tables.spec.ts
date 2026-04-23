import {webTablesFixture,expect} from '../fixtures/fixture.ts';

webTablesFixture.describe('Web Tables Page', () => {
    webTablesFixture('Import POM from web-tables.page.ts', async ({ webTablesPage, page }) => {


        //add 10 new record

        for (let i = 1; i <= 10; i++) {
            await webTablesPage.addNewRecord(`FirstName${i}`, `LastName${i}`, `email${i}@example.com`, 20 + i, 30000 + i * 1000, `Department${i}`);
        }

        //assert the new record is added
        await expect(webTablesPage.tableRow.filter({ hasText: 'FirstName1' })).toBeVisible();

        //edit the record with name FirstName1
        const editButton = webTablesPage.getEditButton('cierra@example.com');
        await editButton.click();

        //update the first name to UpdatedFirstName1
        await webTablesPage.firstNameInput.fill('UpdatedFirstName1');
        await page.locator('.modal.show #submit').click();
        await page.waitForTimeout(500);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);

        //assert the record is updated
        await expect(webTablesPage.tableRow.filter({ hasText: 'UpdatedFirstName1' })).toBeVisible();


        //pagination
        await webTablesPage.nextButton.click();
        await expect(webTablesPage.tableRow.filter({ hasText: 'email10@example.com' })).toBeVisible();
        await webTablesPage.previousButton.click();
        await expect(webTablesPage.tableRow.filter({ hasText: 'email1@example.com' })).toBeVisible();

        //delete the record with name UpdatedFirstName1
        await page.evaluate(() => {
            document.querySelector('.col-12.mt-4.col-md-3.col-xl-3')?.remove();
        });
        const deleteButton = webTablesPage.getDeleteButton('cierra@example.com');
        await deleteButton.click();

        //assert the record is deleted
        await expect(webTablesPage.tableRow.filter({ hasText: 'cierra@example.com' })).toHaveCount(0);


    })

});