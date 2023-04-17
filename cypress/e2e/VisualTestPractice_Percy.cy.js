///<reference types='cypress' />

describe('Verify the functionality of both static drag and drop options with Visual test', () => {
    const dataTransfer = new DataTransfer()


    it('Verify static drag & drop', () => {

        cy.visit('https://demo.automationtesting.in/Static.html')

        //drag the first logo in the field
        cy.get('#angular').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#droparea').trigger('drop', {
            dataTransfer
        })

        cy.get('.dragged > #angular').should('have.attr', 'id', 'angular')

        //dragging the second logo
        cy.get('#mongo').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#droparea').trigger('drop', {
            dataTransfer
        })
        cy.get('.dragged > #mongo').should('have.attr', 'id', 'mongo')


        //dragging the third logo
        cy.get('#node').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#droparea').trigger('drop', {
            dataTransfer
        })
        // cy.get('#node').drag('#droparea')
        cy.get('.dragged > #node').should('have.attr', 'id', 'node')

        cy.percySnapshot()





    })
})