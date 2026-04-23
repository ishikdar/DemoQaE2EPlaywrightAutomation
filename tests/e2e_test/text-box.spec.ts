import { testWithFixture, expect } from '../fixtures/fixture.ts';

testWithFixture.describe('TextBox Page', () => {

    //this will be executed once before all the tests
    testWithFixture.beforeAll(async () => {
        console.log('Textbox test started and ran once before all tests');

    });


    testWithFixture('fill up the form and submit', async ({ textBoxPage }) => {

        //input some value
        await textBoxPage.fullNameInput.fill('Md Al Imran Shikdar')
        await textBoxPage.emailInput.fill('mdalimranshikdar@example.com');
        await textBoxPage.currentAddressInput.fill('123 Main St, City, Country');
        await textBoxPage.permanentAddressInput.fill('456 Another St, City, Country');

        //submit the form
        await textBoxPage.submitButton.click();

        //assert the values
        await expect(textBoxPage.nameAssertion).toHaveText('Name:Md Al Imran Shikdar');

    });


    testWithFixture.afterAll(async () => {
        console.log('Textbox test finished and ran once');
    });
})