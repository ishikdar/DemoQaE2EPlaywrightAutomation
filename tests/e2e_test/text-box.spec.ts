import { textBoxFixture, expect } from '../fixtures/fixture.ts';

textBoxFixture.describe('TextBox Page', () => {

    //this will be executed once before all the tests
    textBoxFixture.beforeAll(async () => {
        console.log('Textbox test started and ran once before all tests');

    });


    textBoxFixture('fill up the form and submit', async ({ textBoxPage, page }) => {
        //form fill up
        await textBoxPage.fillUpTheForm('Md Al Imran Shikdar', 'mdalimranshikdar@example.com', '123 Main St, City, Country', '456 Another St, City, Country');

        //assert the values
        await expect(page.locator('#name')).toHaveText('Name:Md Al Imran Shikdar');

    });

    textBoxFixture.afterAll(async () => {
        console.log('Textbox test finished and ran once');
    });
})