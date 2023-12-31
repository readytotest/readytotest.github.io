# Test Automation with Cypress
This repo contains Cypress scripts that test <a href="https://opensource-demo.orangehrmlive.com">OrangeHRM Demo</a>, <a href="https://www.saucedemo.com">Sauce Demo</a>, <a href="https://ecommerce-playground.lambdatest.io">LambdaTest Playground</a>, and  <a href="https://readytotest.github.io">My GitHub Page</a>

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=readytotest_readytotest.github.io)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![Sauce Demo GH Actions Parallel](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dm22wp&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dm22wp/runs)
<br> 
Note: Cypress Cloud only used for Sauce Demo specs. All other tests will use Mochawesome report.

```diff
@@ Sample/demo Cypress scripts @@

# Upon commit or PR, GH Actions runs a test against my GH Page

! Repo contributors can manually run Cypress scripts from GH Actions

- Run Cypress from terminal (Not GUI) to output reports

+ npm run clean-reports-and-downloads //removes reports and downloads directories and recreates them
+ npm run sauce-demo //GitHub Actions/Cypress Cloud uses this command. Trigger run manually from GitHub Actions workflow
+ npm run orange-demo //cleans reports and download directories, then runs tests against OrangeHRM demo site
+ npm run lambda-test-demo //cleans reports and download directories, then runs tests against LambdaTest demo site
+ npm run ready-to-test //cleans reports and download directories, then runs tests against my GitHub page
```
