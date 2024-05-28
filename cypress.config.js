const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:8000",
    specPattern: "cypress/admin/e2e",
    supportFile: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
