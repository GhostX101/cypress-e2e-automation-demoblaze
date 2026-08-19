const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";


module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
  },

  reporter: "allure",
  reporterOptions: {
    resultsDir: "allure-results",
  },
});
