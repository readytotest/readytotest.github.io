# Test Automation with Cypress
This repo contains Cypress scripts that test <a href="https://opensource-demo.orangehrmlive.com">OrangeHRM Demo</a>, <a href="https://www.saucedemo.com">Sauce Demo</a>, <a href="https://ecommerce-playground.lambdatest.io">LambdaTest Playground</a>, and  <a href="https://readytotest.github.io">My GitHub Page</a>

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=readytotest_readytotest.github.io)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=bugs)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![GitHub Actions Main](https://github.com/readytotest/readytotest.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/main.yml)

[![GitHub Actions GitGuardian](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml)

[![Sauce Demo GH Actions Parallel](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dm22wp&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dm22wp/runs)
<br> 
<sup>Note: Cypress Cloud only used for Sauce Demo specs. All other tests will use Mochawesome report.</sup>

```diff
@@ Sample/demo Cypress scripts @@

# GH Actions runs a test against my GH Page after page build

! Repo contributors can manually run Cypress scripts from GH Actions

- Run Cypress from terminal (Not GUI) to output reports

+ npm run clean-reports-and-downloads //removes reports and downloads directories and recreates them
+ npm run sauce-demo //GitHub Actions/Cypress Cloud uses this command. Trigger run manually from GitHub Actions workflow
+ npm run orange-demo //cleans reports and download directories, then runs tests against OrangeHRM demo site
+ npm run lambda-test-demo //cleans reports and download directories, then runs tests against LambdaTest demo site
+ npm run ready-to-test //cleans reports and download directories, then runs tests against my GitHub page
+ npm run scratch-pad //cleans reports and download directories, then runs experimental tests
```
