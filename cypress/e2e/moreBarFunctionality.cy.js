/// <reference types = 'cypress' />

describe('Verify the functionality of the JqueryProgressBar, Loader, and Progress bar', () => {


    it('Verify the functionality of the JqueryProgressBar', () => {

        cy.visit('https://demo.automationtesting.in/JqueryProgressBar.html')
        cy.get('#downloadButton').click()

        //canceling
        cy.get('.ui-progressbar-overlay').should('be.visible')
        cy.get('.progress-label').should('contain.text', 'Current Progress')
        cy.get('.ui-dialog-buttonset > button').should('contain.text', 'Cancel').click()
        cy.get('#downloadButton').should('be.enabled')


        //aftercompleting
        cy.get('#downloadButton').click().then(() => {
            cy.get('#progressbar', { timeout: 10000 }).should(($progressBar) => {
                expect($progressBar).to.have.attr('aria-valuenow', '100')
            }).as('progressBarValue')
        })
        cy.get('@progressBarValue').then(() => {
            cy.get('.progress-label').should('have.text', 'Complete!').then(() => {
                cy.get('.ui-dialog-buttonset > button').should('have.text', 'Close')
            })
            cy.get('.ui-dialog-buttonset > button').click()
        })

        //once dialogue is closed
        cy.get('#downloadButton').should('be.enabled')

    })

    it('Verify the functionality of the Loader', () => {

        cy.visit('https://demo.automationtesting.in/Loader.html')
        cy.get('#loader').click().then(() => {
            cy.get('.blockMsg > h1').should('contain.text', 'Please wait').then(() => {
                cy.get('.modal-title', { timeout: 25000 }).should('be.visible').should('contain.text', 'title')
                cy.get('.close').should('be.visible')
                cy.get('p').should('be.visible')
                cy.get('.btn-default').should('be.visible')
                cy.get('.modal-footer > .btn-primary').should('be.visible').click()
                cy.get('.modal-content').should('not.be.visible')

            })
        })



    })







    it('Verify the functionality of the ProgressBar', () => {

        cy.visit('https://demo.automationtesting.in/ProgressBar.html')
        cy.get('#cricle-btn').click().then(() => {

            cy.get('.progressbar-text', { timeout: 10000 }).should('contain.text', '100')

        })

    })

})


