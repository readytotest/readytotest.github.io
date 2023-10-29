# Test Automation with Cypress
- This repo contains the files for the GitHub Page https://readytotest.github.io
- This repo contains Cypress scripts that test <a href="https://opensource-demo.orangehrmlive.com">OrangeHRM Demo</a>, <a href="https://www.saucedemo.com">Sauce Demo</a>, and  <a href="https://readytotest.github.io">My GitHub Page</a>
- This repo contains <a href="https://github.com/readytotest/readytotest.github.io/actions">GitHub Actions Workflows</a> for running tests

```diff
@@ An experimental repo for tinkering with Cypress @@

# Whenever a commit is pushed to the main branch, GH Actions runs a smoke test against the GH Page

! Currently working on tests for the OrangeHRM demo site

- Run Cypress from terminal (Not GUI) to output reports
- Reports, videos, and screenshots are created automatically whenever you run Cypress from terminal

+ npm run clean-reports-and-downloads //removes reports and downloads directories and recreates them
+ npm run sauce-demo //cleans reports and download directories, then runs tests against Sauce Demo site
+ npm run orange-demo //cleans reports and download directories, then runs tests against OrangeHRM demo site
+ npm run ready-to-test //cleans reports and download directories, then runs tests against my GitHub page
+ npx cypress run //runs all spec files in any directory or subdirectory in this project
+ npx cypress open //opens Cypress GUI if you want to to run from there
```
