/*
  Note: This is just a basic test and it runs on a cron schedule in a GH Actions
  workflow. I'm not doing much with this test as I've created new tests for my
  Github Pages site using Playwright. Check out my Playwright repo to see.
*/



describe('Smoke Test GitHub Page', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.log('Visit Base URL')
      
      })
     
   it('Check for text on page, go to reports page, check for HTML elements', () => {
        cy.get('[data-cy="cypress-report"]').click() 
        cy.get('center').should('include.text', 'Click on the test results above ^^ to expand it and view the video')
        cy.get('[href="/index.htm"]').click() 
        cy.get('body').should('include.text', 'Ready to Test (QA) GitHub Profile')
        cy.get('body').should('include.text', 'UI Test Automation with Cypress')
        cy.get('body').should('include.text', 'Cypress Cloud')
        cy.get('body').should('include.text', 'GitHub Actions')
        cy.get('body').should('include.text', 'National Weather Service API')
        cy.get('body').should('include.text', 'Postman API Testing')
        cy.get('body').should('include.text', 'Most Recent Earthquake')
        cy.get('earthquake-place').should('exist')
        cy.get('body').should('include.text', 'Repository Last Commit')
        cy.get('repo-update-timestamp').should('exist')

    
    })
  

  })