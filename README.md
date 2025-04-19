# 💻 My GitHub Pages Site: QA, Automation & Tinkering

Welcome to the repo for my personal site. This is where I mess around with software QA, test automation, and web stuff.

## 🔍 What this repo's about

- This site lives on **GitHub Pages**
- GitHub Actions run tests on it using **Playwright**
- There's some **Cypress** code still hanging around
- Quality gates, linting, and experimenting

## 🚀 Quick Start

Clone the repo, then:

```
npm install
```

⚠️ Heads up: `npm install` might overwrite the .gitignore and pre-commit inside the .husky/\_ dir. Undo that if it happens.

### Local Dev Setup

If you want to run the tests locally with the dev server:

1. Run the server with:
   `node server.js`  
   Or with the bash script (not necessary, just for fun):  
   `chmod +x start-server.sh` (Only need to do this if permissions aren't set 1st time)  
   `./start-server.sh`

## 🧼 Pre-commit Hooks

Pre-commit is set up with Husky + lint-staged. Here's what runs on staged files:

- `eslint` and HTML linting/Cypress plugins for that
- `prettier` for formatting (Set this up as an eslint plugin also)

If your commit fails, check the logs.

## 📁 What's in here?

```diff
@@ This repo contains: @@

# GitHub Pages site source files

! GitHub Actions YAMLs
! playwright-mysite.yml pulls in th test-playwright repo and runs tests on PRs/pushes

- Old Cypress scripts (mostly retired)
- One still active: readyToTestSmoke.cy.js (runs on a schedule via GH Actions)

+ Playwright is the main character now
+ If you're curious, check out my test-playwright repo

```

## 🛠️ Workspace Files

If you are using VS Code, I recommend you open the repo with **VS Code's workspace files**. The file is located in the root of the repo and has the `.code.workspace` extension. It contains configurations for the **Prettier** extension and **recommended extensions**.

If you want, you can add the paths to both this repo and the test-playwright repo in your workspace, which allows you to work on them simultaneously. However, I personally prefer working with one repo at a time to keep things organized, unless I'm wanting to test Playwright against my site locally.

## 🚦 Badges

**SonarCloud status**  
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=readytotest_readytotest.github.io)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)  
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=bugs)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=readytotest_readytotest.github.io&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=readytotest_readytotest.github.io)

**CI/CD**  
[![Playwright GitHub Action](https://github.com/readytotest/readytotest.github.io/actions/workflows/playwright-mysite.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/playwright-mysite.yml)
[![Cypress GitHub Action](https://github.com/readytotest/readytotest.github.io/actions/workflows/cypress-mysite.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/cypress-mysite.yml)
[![GitGuardian](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml/badge.svg)](https://github.com/readytotest/readytotest.github.io/actions/workflows/gitGuardian.yml)

**Cypress Cloud (for Sauce Demo only)**  
[![Sauce Demo GH Actions Parallel](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dm22wp&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dm22wp/runs)  
<sup>Note: Only Sauce Demo specs go through Cypress Cloud. The rest use good ol' Mochawesome reports.</sup>

**Commit Activity**  
[![Commit activity](https://img.shields.io/github/commit-activity/t/readytotest/readytotest.github.io?style=social&color=%23FF69B4)](https://github.com/readytotest/readytotest.github.io/commits/main/)
[![Last commit](https://img.shields.io/github/last-commit/readytotest/readytotest.github.io?style=social)](https://github.com/readytotest/readytotest.github.io/commits/main/)
