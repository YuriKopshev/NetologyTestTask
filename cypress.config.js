const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vik539",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
