import {type Locator, Page} from '@playwright/test';

export class ButtonsPage{
    private readonly buttonsPageVar: Page;

    //declare locators
    readonly doubleClickButton: Locator;
    readonly rightClickButton: Locator;
    readonly clickMeButton: Locator;


    //initialize locators in the constructor
    constructor(page:Page){
        this.buttonsPageVar = page;
        this.doubleClickButton = page.getByRole('button', {name: 'Double Click Me'});
        this.rightClickButton = page.getByRole('button', {name: 'Right Click Me'});
        this.clickMeButton = page.getByRole('button', {name: 'Click Me',exact: true});
    }

    async goToButtonsPage(){
        await this.buttonsPageVar.goto('https://demoqa.com/buttons');
    }
}