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

### Environment Variables

Create a `.env` file in the project root for API test configuration:

```bash
REQRES_API_KEY=your_api_key_here
```

Get your free API key from [reqres.in](https://reqres.in/). The `.env` file is gitignored and will not be committed.

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
│   ├── e2e_test/                    # Test spec files
│   │   ├── text-box.spec.ts        # Text box form tests
│   │   ├── checkbox.spec.ts        # Checkbox tree tests
│   │   ├── radio-button.spec.ts    # Radio button tests
│   │   ├── buttons.spec.ts         # Click, double-click, right-click tests
│   │   ├── web-tables.spec.ts      # Table CRUD + pagination tests
│   │   ├── practice-form.spec.ts   # Full form submission tests
│   │   ├── droppable.spec.ts       # Drag and drop tests
│   │   ├── hover.spec.ts           # Hover menu tests
│   │   ├── iframe.spec.ts          # iFrame interaction tests
│   │   ├── alerts.spec.ts          # Alert, confirm, prompt dialog tests
│   │   ├── new-tab.spec.ts         # New tab/window handling tests
│   │   └── api-test.spec.ts        # API testing (GET, POST, PUT, DELETE)
│   ├── pages/                       # Page Object Model classes
│   │   ├── text-box.page.ts
│   │   ├── checkbox.page.ts
│   │   ├── radio-button.page.ts
│   │   ├── buttons.page.ts
│   │   ├── web-tables.page.ts
│   │   ├── practice-form.page.ts
│   │   ├── droppable.pages.ts
│   │   ├── hover.pages.ts
│   │   ├── iframe.pages.ts
│   │   ├── alerts.pages.ts
│   │   └── new-tab.pages.ts
│   ├── fixtures/                    # Custom Playwright fixtures
│   │   └── fixture.ts              # Extended test fixtures for all pages
│   └── test_data/                   # Test data files
│       └── sample-picture.png
├── .env                             # API keys (gitignored)
├── .github/
│   └── workflows/
│       └── playwright.yml           # GitHub Actions CI/CD pipeline
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
| iFrame | commitquality.com/practice-iframe | Interacting with elements inside iframes |
| Alerts | demoqa.com/alerts | Simple, delayed, confirm, and prompt dialogs |
| New Tab | demoqa.com/browser-windows | Opening and verifying new tab content |

### API Testing
- GET, POST, PUT, DELETE requests using Playwright's `request` fixture
- Tested against [reqres.in](https://reqres.in/) API
- API key loaded from `.env` using `dotenv`
- Response status code and body assertions

### Fixtures
- Custom `test.extend()` fixtures for each page object
- Auto-navigation to page URL before each test
- Screenshot on failure in fixture teardown

### CI/CD
- **GitHub Actions** workflow runs all tests on every push and pull request to `main`
- Runs on `ubuntu-latest` with Node.js 20
- Installs dependencies, Playwright browsers, and creates `.env` from GitHub Secrets
- Uploads HTML test report as an artifact (retained for 7 days)
- Headless mode automatically enabled on CI via `playwright.config.ts`

## CI/CD Setup

Tests run automatically via GitHub Actions on push/PR to `main`.

To set up:
1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Add a new repository secret: `REQRES_API_KEY` with your API key
3. Push to `main` — the workflow will trigger automatically

View test results: Go to **Actions** tab → select the run → download the `playwright-report` artifact.

## Tech Stack

- **Playwright Test** — test runner and browser automation
- **TypeScript** — type-safe test code
- **dotenv** — environment variable management for API keys
- **GitHub Actions** — CI/CD pipeline
- **Chromium** — primary test browser (Firefox and WebKit available in config)

## Built with ❤️ by Imran