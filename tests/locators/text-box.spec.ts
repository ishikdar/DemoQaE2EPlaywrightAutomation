import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box.page';

test.describe('TextBox Page', () => {

    let textBoxPage: TextBoxPage;

    //this will be executed once before all the tests
    test.beforeAll(async () => {
        console.log('Textbox test started and ran once before all tests');

    });

    //before each test, we will navigate to the page
    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.goToTextBoxPage();
    });

    //this test will check if all the fields are visible or not
    test('check all the fields are visible or not', async ({ page }) => {
        await expect(textBoxPage.fullNameInput).toBeVisible();
        await expect(textBoxPage.emailInput).toBeVisible();
        await expect(textBoxPage.currentAddressInput).toBeVisible();
        await expect(textBoxPage.permanentAddressInput).toBeVisible();
        await expect(textBoxPage.submitButton).toBeVisible();

    });

    test('fill up the form and submit', async ({ page }) => {

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

    test.afterEach(async ({ page }) => { 
        //take screenshot after each test
        await page.screenshot({ path: `tests/fixtures/screenshot-${Date.now()}.png` });
    });

    test.afterAll(async () => { 
        console.log('Textbox test finished and ran once');
    });
})