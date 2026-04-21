import {type Locator, Page} from '@playwright/test';

export class ButtonsPage{
    private readonly buttonsPageVar: Page;

    //declare locators
    readonly doubleClickButton: Locator;
    readonly rightClickButton: Locator;
    readonly clickMeButton: Locator;

    //assertion elements
    readonly doubleClickAssertion: Locator;
    readonly rightClickAssertion: Locator;
    readonly clickMeAssertion: Locator;

    //initialize locators in the constructor
    constructor(page:Page){
        this.buttonsPageVar = page;
        this.doubleClickButton = page.getByRole('button', {name: 'Double Click Me'});
        this.rightClickButton = page.getByRole('button', {name: 'Right Click Me'});
        this.clickMeButton = page.getByRole('button', {name: 'Click Me',exact: true});

        //initialize assertion elements
        this.doubleClickAssertion = page.getByText('You have done a double click');
        this.rightClickAssertion = page.getByText('You have done a right click');
        this.clickMeAssertion = page.getByText('You have done a dynamic click');
    }

    async goToButtonsPage(){
        await this.buttonsPageVar.goto('https://demoqa.com/buttons');
    }
}