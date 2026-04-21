import {type Page, type Locator} from "@playwright/test";

export class DroppablePage{
    private readonly droppablePageVar: Page;

    //simple droppable locators
    readonly simpleDraggable: Locator;
    readonly simpleDroppable: Locator;

    //assertion elements
    readonly droppableAssertionText: Locator;

    constructor(page: Page) {
        this.droppablePageVar = page;

        //simple droppable locators
        this.simpleDraggable = page.getByText('Drag me!', {exact: true});
        this.simpleDroppable = page.getByText('Drag the small box here.', {exact: true});

        //assertion elements
        this.droppableAssertionText = page.getByText('Success!', {exact: true});
    }

    async goToDroppablePage(){
        await this.droppablePageVar.goto('https://commitquality.com/practice-drag-and-drop');
    }


}