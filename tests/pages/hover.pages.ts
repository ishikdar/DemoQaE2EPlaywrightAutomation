import {type Page, type Locator} from "@playwright/test";

export class HoverPage{
    private readonly hoverPageVar: Page;

    //locators
    readonly menuItem2: Locator;
    readonly subSubListButton: Locator;
    readonly subSubListItem1: Locator;
    readonly subSubListItem2: Locator;

    constructor(page: Page) {
        this.hoverPageVar = page;

        //locators
        this.menuItem2 = page.getByText('Main Item 2', {exact: true});
        this.subSubListButton = page.getByText('SUB SUB LIST');
        this.subSubListItem1 = page.getByText('Sub Sub Item 1');
        this.subSubListItem2 = page.getByText('Sub Sub Item 2');
    }

    async goToHoverPage(){
        await this.hoverPageVar.goto('https://demoqa.com/menu');
    }
}

