import {practiceFormFixture, expect} from '../fixtures/fixture.ts';

practiceFormFixture.describe('Practice Form Page', () => {
    practiceFormFixture('should be able to fill up practice form', async ({practiceFormPage, page}) => {

        await practiceFormPage.fillUpTheForm(
            'Md Al Imran','Shikdar','imran@example.com','1234567890','01 Feb 1996',['Computer Science'],
            'Sports','Reading','tests/test_data/sample-picture.png','123 Main St, City, Country',
            'NCR','Delhi'
        );

        //assert the output
        await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

        //close the popup
        await practiceFormPage.closePopup();
        
    });
});