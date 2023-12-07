# Test Automation with Cypress
This repo contains Cypress scripts that test <a href="https://opensource-demo.orangehrmlive.com" target="_blank" rel="noopener noreferrer">OrangeHRM Demo</a>, <a href="https://www.saucedemo.com" target="_blank" rel="noopener noreferrer">Sauce Demo</a>, and  <a href="https://readytotest.github.io">My GitHub Page</a>

[![Sauce Demo GH Actions Parallel](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dm22wp&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dm22wp/runs)

```diff
@@ Sample/demo Cypress scripts @@

# Upon commit or PR, GH Actions runs a test against my GH Page

! Repo contributors can manually run Cypress scripts from GH Actions

- Run Cypress from terminal (Not GUI) to output reports

+ npm run clean-reports-and-downloads //removes reports and downloads directories and recreates them
+ npm run sauce-demo //GitHub Actions/Cypress Cloud uses this command. Trigger run manually from GitHub Actions workflow
+ npm run orange-demo //cleans reports and download directories, then runs tests against OrangeHRM demo site
+ npm run ready-to-test //cleans reports and download directories, then runs tests against my GitHub page
```
