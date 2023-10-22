describe('Smoke Test GitHub Page', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.log('Visit Base URL')
      
      })
     
   it('Go to reports page and return to index page', () => {
        cy.get('[data-cy="cypress-report"]').click() 
        cy.get('center').should('include.text', 'Click on the test results above ^^ to expand it and view the video')
        cy.get('[href="/index.htm"]').click() 
        cy.get('body').should('include.text', 'Cypress Test Automation Experimental Site')
    })

  })