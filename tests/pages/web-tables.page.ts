import {type Page, Locator} from '@playwright/test';

export class WebTablesPage {
    private readonly webTablesPageVar: Page;

    //declare locators
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly ageInput: Locator;
    readonly salaryInput: Locator;
    readonly departmentInput: Locator;
    readonly submitButton: Locator;

    //search
    readonly searchBox: Locator

    // table row assertion element
    readonly tableRow: Locator;

    //buttons below the table
    readonly nextButton: Locator;
    readonly previousButton: Locator;

    //initialize locators in the constructor
    constructor(page: Page) {
        this.webTablesPageVar = page;
        this.addButton = page.getByRole('button', {name: 'Add'});
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.ageInput = page.getByPlaceholder('Age');
        this.salaryInput = page.getByPlaceholder('Salary');
        this.departmentInput = page.getByPlaceholder('Department');
        this.submitButton = page.getByRole('button', {name: 'Submit'});

        //search
        this.searchBox = page.getByPlaceholder('Type to search');

        // table row assertion element
        this.tableRow = page.getByRole('row');

        //buttons below the table
        this.nextButton = page.getByRole('button', {name: 'Next'});
        this.previousButton = page.getByRole('button', {name: 'Previous'});
    }

    async goToWebTablesPage() {
        await this.webTablesPageVar.goto('https://demoqa.com/webtables');
    }

    async addNewRecord(firstName: string, lastName: string, email: string, age: number, salary: number, department: string) {
        await this.addButton.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.ageInput.fill(age.toString());
        await this.salaryInput.fill(salary.toString());
        await this.departmentInput.fill(department);
        await this.submitButton.click();
    }

    getEditButton(name: string): Locator {
        return this.tableRow.filter({hasText: name}).getByTitle('Edit');
    }

    getDeleteButton(name: string): Locator {
        return this.tableRow.filter({hasText: name}).getByTitle('Delete');
    }

}