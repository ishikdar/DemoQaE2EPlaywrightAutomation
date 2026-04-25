import { Locator, Page, FrameLocator } from "@playwright/test";


export class IframePage {
    private readonly iframePageVar: Page;

    //locators
    readonly iframeLocator: FrameLocator;
    readonly addProductButton: Locator;

    //add product page locators
    readonly productNameInput: Locator;
    readonly productPriceInput: Locator;
    readonly productDateInput: Locator;
    readonly addButton: Locator;

    //product table row
    readonly productTableRow: Locator;

    constructor(page: Page) {
        this.iframePageVar = page;
        this.iframeLocator = page.frameLocator('iframe[title="Products"]')

        //locators inside the iframe
        this.addProductButton = this.iframeLocator.getByRole('link', { name: 'Add a Product' });

        //locators on the add product page
        this.productNameInput = this.iframeLocator.getByPlaceholder('Enter a product name');
        this.productPriceInput = this.iframeLocator.getByPlaceholder('Enter a price');
        this.productDateInput = this.iframeLocator.getByLabel('Date Stocked');
        this.addButton = this.iframeLocator.getByRole('button', { name: 'Submit' });

        //product table row
        this.productTableRow = this.iframeLocator.getByRole('row');


    }

    async goToIframePage() {
        await this.iframePageVar.goto('https://commitquality.com/practice-iframe');
    }

    async addProduct(productName: string, productPrice: number, productDate: string) {
        await this.addProductButton.click();
        await this.productNameInput.fill(productName);
        await this.productPriceInput.fill(productPrice.toString());
        await this.productDateInput.fill(productDate);
        await this.addButton.click();
    }

}