# Test Automation with Cypress
This repo contains Cypress scripts that test <a href="https://opensource-demo.orangehrmlive.com">OrangeHRM Demo</a>, <a href="https://www.saucedemo.com">Sauce Demo</a>, and  <a href="https://readytotest.github.io">My GitHub Page</a>

```diff
@@ Sample/demo Cypress scripts @@

# Upon commit or PR, GH Actions runs a test against my GH Page

! Repo contributors can manually run Cypress scripts from GH Actions

- Run Cypress from terminal (Not GUI) to output reports

+ npm run clean-reports-and-downloads //removes reports and downloads directories and recreates them
+ npm run sauce-demo //cleans reports and download directories, then runs tests against Sauce Demo site
+ npm run orange-demo //cleans reports and download directories, then runs tests against OrangeHRM demo site
+ npm run ready-to-test //cleans reports and download directories, then runs tests against my GitHub page
```
