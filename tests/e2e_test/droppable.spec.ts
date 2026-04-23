import {droppableFixture, expect} from '../fixtures/fixture.ts';

droppableFixture.describe('Droppable Page', () => {
    droppableFixture('simple droppable', async ({droppablePage,page}) => {

        //drag the draggable element and drop it on the droppable element
        await droppablePage.simpleDraggable.dragTo(droppablePage.simpleDroppable);

        //assert the output
        await expect(page.getByText('Success!', {exact: true})).toBeVisible();
        });
});