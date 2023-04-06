/// <reference types = 'cypress' />

describe('Verify the text alignment options, background and foreground color of text in the SummerNote', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/SummerNote.html')
    })


    it('Verify the alignment option in CKEditor', () => {

        cy.get('.note-editable > p').should('contain.text', 'Hello Summernote')

        cy.get('div.note-btn-group.btn-group.note-para > div > button').as('AlignOption').click()

        cy.get('[data-original-title="Align right (⌘+⇧+R)"] > .note-icon-align-right').invoke('show').click()                     //right align

        cy.get('@AlignOption').click()
        cy.get('[data-original-title="Align left (⌘+⇧+L)"] > .note-icon-align-left').invoke('show').click({ force: true })         //left align

        cy.get('@AlignOption').click()
        cy.get('[data-original-title="Align center (⌘+⇧+E)"]').invoke('show').click({ force: true })                               //center align  

        cy.get('@AlignOption').click()
        cy.get('[data-original-title="Justify full (⌘+⇧+J)"] > .note-icon-align-justify').invoke('show').click({ force: true })   //justify align


    })

    it.only('Verify the background & foreground colour in CKEditor', () => {

        cy.get('.note-editable > p').should('contain.text', 'Hello Summernote')
        cy.get('.note-editable > p').type('{selectAll}')
        cy.get(':nth-child(4) > .note-btn-group > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .note-holder > .note-color-palette > :nth-child(6) > [style="background-color:#CE0000"]').click()

        cy.get(':nth-child(4) > .note-btn-group > .dropdown-toggle').click()
        cy.get(':nth-child(2) > .note-holder > .note-color-palette > :nth-child(1) > [style="background-color:#EFEFEF"]').click()
        cy.get('.note-editable > p').should('contain.text', 'Hello Summernote')
        cy.get('font').should('have.attr', 'style').and('include', 'background-color: rgb(206, 0, 0);')
    })




})
