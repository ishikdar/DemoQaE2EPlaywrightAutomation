import { test, expect } from '@playwright/test';
import { DroppablePage } from '../pages/droppable.pages';

test.describe('Droppable Page', () => {
    test('simple droppable', async ({ page }) => {
        //create an object of the page class
        const droppablePage = new DroppablePage(page);

        //navigate to the page
        await droppablePage.goToDroppablePage();

        //drag the draggable element and drop it on the droppable element
        await droppablePage.simpleDraggable.dragTo(droppablePage.simpleDroppable);

        //assert the output
        await expect(droppablePage.droppableAssertionText).toBeVisible();
        });
});