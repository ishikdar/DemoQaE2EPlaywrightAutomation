import {type Locator, Page} from '@playwright/test';

export class CheckBoxPage {
    private readonly checkBoxPageVar: Page;

    //declare locators for + icons
    readonly homePlusIcon: Locator;
    readonly desktopPlusIcon: Locator;
    readonly documentsPlusIcon: Locator;
    readonly downloadsPlusIcon: Locator;

    //declare locators for main checkboxes
    readonly desktopCheckBox: Locator;
    readonly documentsCheckBox: Locator;
    readonly downloadsCheckBox: Locator;

    //initialize locators in the constructor
    constructor(page:Page){
        this.checkBoxPageVar = page;

        this.homePlusIcon = page.getByRole('treeitem', {name: 'Home'}).locator('.rc-tree-switcher');
        this.desktopPlusIcon = page.getByRole('treeitem', {name: 'Desktop'}).locator('.rc-tree-switcher');
        this.documentsPlusIcon = page.getByRole('treeitem', {name: 'Documents'}).locator('.rc-tree-switcher');
        this.downloadsPlusIcon = page.getByRole('treeitem', {name: 'Downloads'}).locator('.rc-tree-switcher');

        this.desktopCheckBox = page.getByRole('checkbox', {name: 'Desktop'});
        this.documentsCheckBox = page.getByRole('checkbox', {name: 'Documents'});
        this.downloadsCheckBox = page.getByRole('checkbox', {name: 'Downloads'});
    }

    async goToCheckBoxPage(){
        await this.checkBoxPageVar.goto('https://demoqa.com/checkbox');
    }


}