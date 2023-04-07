/// <reference types = 'cypress' />

describe('Verify the functionality of Multiple modals', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Modals.html')
    })


    it('Verify the functionality of Bootstrap modal', () => {


        cy.get('[href="#myModal"]').click()
        cy.get('#myModal > .modal-dialog').should('be.visible')
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .close').should('be.enabled')
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible').and('contain.text', 'title')
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-body').should('not.be.empty')
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-body > .btn').should('be.enabled')
        cy.get('.modal-footer > .btn-default').should('be.enabled')
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })

    it('Verify the functionality of the multiple modal', () => {

        cy.get('[href="#myModalMulti"]').click()
        cy.get('#myModalMulti > .modal-dialog').should('be.visible')
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-header').should('be.visible').and('contain.text', 'First Modal')
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-header > .close').should('be.enabled')
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-body > .btn').should('be.visible')
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').should('be.visible')
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible')

        //verifying inside the first modal
        cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-body > .btn').click().then(() => {
            cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible').and('contain.text', 'Modal 2')
            cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .close').should('be.visible')
            cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-body').should('be.visible')

            //checking the second modal close button functionality
            cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').should('be.visible').click()
            cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible')

            //checking the second modal save functionality
            cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').click()
            cy.get('[href="#myModalMulti"]').click()
            cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-body > .btn').click().then(() => {
                cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible').and('contain.text', 'Modal 2')
                cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().then(() => {
                    cy.get('#myModalMulti > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('not.be.visible')
                })
            })



        })
    })

})
