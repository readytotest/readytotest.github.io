# Test Automation with Cypress
- This repo contains the files for the GitHub Page https://readytotest.github.io
- This repo contains Cypress scripts

```diff
@@ An experimental repo for tinkering with Cypress @@

# Whenever a commit is pushed to the main branch, GH Actions runs a smoke test against the GH Page

! I'm using macOS locally and Ubuntu in the GH Runner 
! If you are using Windows, things may not work as expected like clean-reports
! You may need to empty the reports directory manually

- Run Cypress from terminal (Not GUI) to output reports

+ npm run clean-reports //removes reports directory and recreates it
+ npm run sauce-demo //runs tests implemented in page object model
+ npm run ready-to-test //quick smoke test for my GitHub page
```