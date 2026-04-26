import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box.page';
import { ButtonsPage } from '../pages/buttons.page';
import { CheckBoxPage } from '../pages/checkbox.page';
import { DroppablePage } from '../pages/droppable.pages';
import { HoverPage } from '../pages/hover.pages';
import { PracticeFormPage } from '../pages/practice-form.page';
import { RadioButtonPage } from "../pages/radio-button.page";
import { WebTablesPage } from '../pages/web-tables.page';
import { IframePage } from '../pages/iframe.pages';
import {AlertsPage} from '../pages/alerts.pages';

type Fixture = {
    textBoxPage: TextBoxPage;
    buttonsPage: ButtonsPage;
    checkBoxPage: CheckBoxPage;
    droppablePage: DroppablePage;
    hoverPage: HoverPage;
    practiceFormPage: PracticeFormPage;
    radioButtonPage: RadioButtonPage;
    webTablesPage: WebTablesPage;
    iframePage: IframePage;
    alertsPage: AlertsPage;
}

// this fixture is only for text-box page/spec related
export const textBoxFixture = test.extend<Fixture>({
    textBoxPage: async ({ page }, use, testInfo) => {
        const textBoxPage = new TextBoxPage(page);
        // navigate to the page before each test
        await textBoxPage.goToTextBoxPage();
        console.log('Fixture setup: Navigated to TextBox page');

        await use(textBoxPage);

        // take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });

        } else {
            console.log('Test passed, no screenshot taken for text-box page!');
        }
    }
});


// this fixture is only for button page/spec related
export const buttonsFixture = test.extend<Fixture>({
    buttonsPage: async ({ page }, use, testInfo) => {
        const buttonsPage = new ButtonsPage(page);
        //navigate to the page before each test
        await buttonsPage.goToButtonsPage();
        console.log('Fixture setup: Navigated to Buttons page');

        await use(buttonsPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for buttons page!');
        }
    }
});


// this fixture is only for checkbox page/spec related
export const checkBoxFixture = test.extend<Fixture>({
    checkBoxPage: async ({ page }, use, testInfo) => {
        const checkBoxPage = new CheckBoxPage(page);
        //navigate to the page before each test
        await checkBoxPage.goToCheckBoxPage();
        console.log('Fixture setup: Navigated to CheckBox page');

        await use(checkBoxPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for checkbox page!');
        }
    }
});


// this fixture is only for droppable page/spec related
export const droppableFixture = test.extend<Fixture>({
    droppablePage: async ({ page }, use, testInfo) => {
        const droppablePage = new DroppablePage(page);
        //navigate to the page before each test
        await droppablePage.goToDroppablePage();
        console.log('Fixture setup: Navigated to Droppable page');

        await use(droppablePage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for droppable page!');
        }
    }
});


// this fixture is only for hover page/spec related
export const hoverFixture = test.extend<Fixture>({
    hoverPage: async ({ page }, use, testInfo) => {
        const hoverPage = new HoverPage(page);
        //navigate to the page before each test
        await hoverPage.goToHoverPage();
        console.log('Fixture setup: Navigated to Hover page');

        await use(hoverPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for hover page!');
        }
    }
});


// this fixture is only for practice form page/spec related
export const practiceFormFixture = test.extend<Fixture>({
    practiceFormPage: async ({ page }, use, testInfo) => {
        const practiceFormPage = new PracticeFormPage(page);
        //navigate to the page before each test
        await practiceFormPage.goToPracticeFormPage();
        console.log('Fixture setup: Navigated to Practice Form page');

        await use(practiceFormPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for practice form page!');
        }
    }
});


// this fixture is only for radio button page/spec related
export const radioButtonFixture = test.extend<Fixture>({
    radioButtonPage: async ({ page }, use, testInfo) => {
        const radioButtonPage = new RadioButtonPage(page);
        //navigate to the page before each test
        await radioButtonPage.goToRadioButtonPage();
        console.log('Fixture setup: Navigated to Radio Button page');

        await use(radioButtonPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for radio button page!');
        }
    }
});



// this fixture is only for web tables page/spec related
export const webTablesFixture = test.extend<Fixture>({
    webTablesPage: async ({ page }, use, testInfo) => {
        const webTablesPage = new WebTablesPage(page);
        //navigate to the page before each test
        await webTablesPage.goToWebTablesPage();
        console.log('Fixture setup: Navigated to Web Tables page');

        await use(webTablesPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for web tables page!');
        }
    }
});


// this fixture is only for iframe page/spec related
export const iframeFixture = test.extend<Fixture>({
    iframePage: async ({ page }, use, testInfo) => {
        const iframePage = new IframePage(page);
        //navigate to the page before each test
        await iframePage.goToIframePage();
        console.log('Fixture setup: Navigated to Iframe page');

        await use(iframePage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for iframe page!');
        }
    }
});


// this fixture is only for alerts page/spec related
export const alertsFixture = test.extend<Fixture>({
    alertsPage: async ({ page }, use, testInfo) => {
        const alertsPage = new AlertsPage(page);
        //navigate to the page before each test
        await alertsPage.goToAlertsPage();
        console.log('Fixture setup: Navigated to Alerts page');

        await use(alertsPage);

        //take screenshot if the test failed
        if (testInfo.status !== 'passed') {
            await page.screenshot({ path: `tests/screenshots/screenshot-${Date.now()}.png` });
        } else {
            console.log('Test passed, no screenshot taken for alerts page!');
        }
    }
});

export { expect } from '@playwright/test';