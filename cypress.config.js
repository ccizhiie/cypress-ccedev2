const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.ts}', // Specify the test specification pattern
    baseUrl: 'https://cce-bot-ai-dev.azurewebsites.net/', // Move baseUrl to e2e configuration
  },
  env: {
    emailUser: 'admin@expinc.io',
    newpass: 'password',
  },
  defaultCommandTimeout: 10000,
  requestTimeout: 5000,
  pageLoadTimeout: 30000,
  watchForFileChanges: true,
});
