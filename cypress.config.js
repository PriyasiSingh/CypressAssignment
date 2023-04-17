const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist } = require('cy-verify-downloads');
// const { mochaReporter } = require('cypress-mochawesome-reporter/plugin');


module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { downloadFile })
      on('task', { isFileExist })

    },
    "watchForFileChanges": false,
    "chromeWebSecurity": false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report/mochawesome-report"
    }
  },
});