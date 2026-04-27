import {iframeFixture,expect} from '../fixtures/fixture.ts';

iframeFixture.describe('Iframe Page', () => {
    iframeFixture('should handle iframe page properly', async ({iframePage}) => {

        //add a product
        await iframePage.addProduct('Test Product', 99, '2024-06-01');
        //assert the product is added successfully
        await expect(iframePage.productTableRow.getByText('Test Product')).toBeVisible();
    });
});
