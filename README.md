# My GitHub Pages Site, GitHub Actions, Cypress Scripts
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=readytotest_readytotest.github.io)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=bugs)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

[![GitHub Actions GitGuardian](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml)

[![Playwright GitHub Page (manual, pr/push)](https://github.com/readytotest/readytotest.github.io/actions/workflows/playwright-mysite.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/playwright-mysite.yml)

[![Cypress GitHub Page (manual, scheduled)](https://github.com/readytotest/readytotest.github.io/actions/workflows/cypress-mysite.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/cypress-mysite.yml)

[![Sauce Demo GH Actions Parallel](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dm22wp&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dm22wp/runs)
<br> 
<sup>Note: Cypress Cloud only used for Sauce Demo specs. All other Cypress tests will use Mochawesome report.</sup>

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/readytotest/readytotest.github.io?style=social&color=%23FF69B4)](https://github.com/readytotest/readytotest.github.io/commits/main/)
[![GitHub last commit](https://img.shields.io/github/last-commit/readytotest/readytotest.github.io?style=social)](https://github.com/readytotest/readytotest.github.io/commits/main/)

### Important Change: March 4th, 2025

- **Added pre-commit hook** with Husky and Lint Staged for staged file linting.
- Set up **ESLint** and **Prettier** to ensure code consistency and quality.
- Integrated **HTML linting** using `@html-eslint/eslint-plugin` to catch issues like duplicate IDs in HTML files.
- Configured linting to run on **JavaScript, JSX, HTML, CJS, and HTM** files.
- Enforced code formatting automatically with Prettier during commits.
- Improved development workflow by preventing bad commits with automated lint checks.

This setup ensures that all code adheres to a consistent style guide before being committed, preventing any potential issues in the codebase.

**Context:**  
I had been using a similar setup on the Playwright repo for a while, but had been lagging on getting it done for this repo. It’s kind of tedious and requires a lot of troubleshooting to work out all the kinks, but it’s finally sorted out and working as expected. 😅

**After cloning the repo, make sure you have [Node.js](https://nodejs.org/) installed, then run `npm install` to set up dependencies.**

----------------------------------
----------------------------------
You can start up the local server by typing node server.js in the VS Code terminal
<br>
or if you want to start it by the bash script you can type: chmod +x start-server.sh
<br>
and then ./start-server.sh (Note: Bash script isn't necessary, it was just something
<br>
I was tinkering with)

```diff
@@ This repo contains: @@

# The files for my GitHub pages website

! YAML files for GitHub Actions workflows,
! including playwright-mysite.yml, which checks
! out both this repo and the test-playwright repo
! and then runs tests against PRs and commits

- Cypress scripts, which I'm no longer maintaining
- except for readyToTestSmoke.cy.js, which runs in
- GH Actions cypress-mysite.yml to test my site
- on a cron schedule

+ I'm mostly focused on Playwright these days, so
+ check out my test-playwright repo to see what
+ I'm currently tinkering with

```
