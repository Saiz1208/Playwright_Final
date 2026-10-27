# Installing

```powershell
node -v # To check Node version
npm install -g typescript # To install TypeScript
tsc -v # To check TypeScript version
npm init playwright@latest # To install Playwright
```

# In Terminal

```powershell
tsc File_name.ts # Generate .js file
node File_name.js # Run a program
tsx File_name.ts # Directly run a program
```

# Playwright

`npx` means Node Package Execute.

```powershell
npx playwright test # Execute all test cases under tests
npx playwright test TC001.spec.ts # Execute a particular test case
npx playwright test TC001.spec.ts --headed # Execute in headed mode
npx playwright test TC001.spec.ts --debug # Execute in debug mode
```

# Note

By default, Playwright runs tests in a headless browser.
