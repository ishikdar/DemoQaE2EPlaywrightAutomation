import { test as baseForTextBoxPage } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box.page';

type Fixture = {
    textBoxPage: TextBoxPage;
}

export const testWithFixture = baseForTextBoxPage.extend<Fixture>({
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
            console.log('Test passed, no screenshot taken');
        }

    }
});

export { expect } from '@playwright/test';