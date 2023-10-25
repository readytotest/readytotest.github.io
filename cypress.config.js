const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  numTestsKeptInMemory: 5,
  experimentalMemoryManagement: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false, //need this to test the sauce demo site with the GUI, otherwise the page won't load completely
  "downloadsFolder": "cypress/downloads",
  
  env: {
    sauceDemoUrl: 'https://www.saucedemo.com',
    orangeDemoUrl: 'https://opensource-demo.orangehrmlive.com'
  },

  e2e: {
    specPattern: '**/*.cy.js',
    experimentalRunAllSpecs: true,
    baseUrl: 'https://readytotest.github.io',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});