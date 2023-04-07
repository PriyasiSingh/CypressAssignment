/// <reference types = 'cypress' />

describe('verify the dynamic data functionality for at least three instances', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/DynamicData.html')
    })


    it('Verify the dynamic data', () => {
        cy.visit('https://demo.automationtesting.in/DynamicData.html')

        // cy.get('#save').click()
        cy.intercept({
            method: 'GET',
            url: ' https://api.randomuser.me/?nat=us',
        }).as('randomData')


        //looping for 3 random user clicks
        for (let i = 0; i < 3; i++) {

            cy.get('#save').click()
            cy.wait('@randomData').its('response.statusCode').should('eq', 200)
            cy.get('#loading > img').should('have.attr', 'src').and('include', 'https://randomuser.me/api/portraits/')


        }

    })




})
