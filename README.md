# DemoQA E2E Playwright Automation

End-to-end test automation project built with **Playwright** and **TypeScript**, using the **Page Object Model** pattern. Tests run against [demoqa.com](https://demoqa.com/) and [commitquality.com](https://commitquality.com/).

## Prerequisites

- **Node.js** (v18 or higher)
- **npm**

## Setup

```bash
# Clone the repository
git clone https://github.com/<your-username>/DemoQaE2EPlaywrightAutomation.git
cd DemoQaE2EPlaywrightAutomation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test text-box.spec.ts

# Run with browser visible
npx playwright test --headed

# Run in a specific browser
npx playwright test --project=chromium

# Run in interactive UI mode
npx playwright test --ui

# Run in debug mode (step through)
npx playwright test --debug

# Filter by test name
npx playwright test -g "simple droppable"

# View HTML report after tests
npx playwright show-report
```

## Project Structure

```
├── tests/
│   ├── locators/                    # Test spec files
│   │   ├── text-box.spec.ts        # Text box form tests
│   │   ├── checkbox.spec.ts        # Checkbox tree tests
│   │   ├── radio-button.spec.ts    # Radio button tests
│   │   ├── buttons.spec.ts         # Click, double-click, right-click tests
│   │   ├── web-tables.spec.ts      # Table CRUD + pagination tests
│   │   ├── practice-form.spec.ts   # Full form submission tests
│   │   ├── droppable.spec.ts       # Drag and drop tests
│   │   └── hover.spec.ts           # Hover menu tests
│   ├── pages/                       # Page Object Model classes
│   │   ├── text-box.page.ts
│   │   ├── checkbox.page.ts
│   │   ├── radio-button.page.ts
│   │   ├── buttons.page.ts
│   │   ├── web-tables.page.ts
│   │   ├── practice-form.page.ts
│   │   ├── droppable.pages.ts
│   │   └── hover.pages.ts
│   └── fixtures/                    # Test data files
│       └── sample-picture.png
├── playwright.config.ts             # Playwright configuration
├── package.json
└── README.md
```

## What This Project Covers

### Locators
- Built-in locators: `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`, `getByTitle`
- CSS selectors as fallback: `#id`, `.class`, `tag`, attribute selectors
- Filtering: `.filter({ hasText })`, `.filter({ has })`
- Chaining locators from parent containers
- `{ exact: true }` for precise matching

### Actions
- Click, double-click, right-click
- `fill()`, `clear()`, `pressSequentially()`
- `check()`, `uncheck()` for checkboxes and radios
- `selectOption()` for native dropdowns
- React Select dropdown handling (click + getByText)
- `hover()` for menus and tooltips
- `dragTo()` for drag and drop
- `setInputFiles()` for file uploads
- `press()` for keyboard actions (Enter, Escape, Tab)

### Assertions
- `toBeVisible()`, `toBeHidden()`, `toBeDisabled()`
- `toHaveText()`, `toContainText()`
- `toHaveCount()`, `toBeChecked()`

### Page Object Model
- Separate page class per page
- Locators as `readonly` properties
- Action methods in page classes
- Assertion-free page objects (assertions live in spec files only)
- Dynamic locator methods (`getEditButton(name)`, `getDeleteButton(name)`)

### Pages Tested
| Page | URL | What's Tested |
|------|-----|---------------|
| Text Box | demoqa.com/text-box | Form inputs, submit, output validation |
| Check Box | demoqa.com/checkbox | Tree navigation, checkbox selection |
| Radio Button | demoqa.com/radio-button | Radio selection, disabled state |
| Buttons | demoqa.com/buttons | Click, double-click, right-click |
| Web Tables | demoqa.com/webtables | Add, edit, delete records, pagination, search |
| Practice Form | demoqa.com/automation-practice-form | Full form with all input types |
| Droppable | commitquality.com/practice-drag-and-drop | Drag and drop |
| Menu | demoqa.com/menu | Hover navigation, nested submenus |

## Tech Stack

- **Playwright Test** — test runner and browser automation
- **TypeScript** — type-safe test code
- **Chromium** — primary test browser (Firefox and WebKit available in config)