/// <reference types = 'cypress' />

describe('Verify the format options, image and table properties in the CKEditor under the WYSIWYG menu', () => {


    it('Verify the format option in CKEditor', () => {

        cy.visit('https://demo.automationtesting.in/CKEditor.html')

        cy.frameLoaded('.cke_wysiwyg_frame').should('be.visible')

        cy.iframe('.cke_wysiwyg_frame').clear().type('Cypress Testing {selectAll}')
        cy.get('#cke_35').click()               //bold
        cy.get('#cke_36').click()               //italic
        cy.get('#cke_13').click()               //copy(not permitted)    

        //assertion
        cy.iframe('.cke_wysiwyg_frame').should('contain.text', 'Cypress Testing').and('contain.html', 'strong')

    })

    it('Verify the image option in CKEditor', () => {

        //https://www.cypress.io/cypress_logo_social.png

        cy.visit('https://demo.automationtesting.in/CKEditor.html')

        cy.frameLoaded('.cke_wysiwyg_frame').should('be.visible')

        cy.iframe('.cke_wysiwyg_frame').clear()
        cy.get('#cke_26').click()               //adding image

        cy.window().then((win) => {
            const data = cy.get('.cke_dialog_body')
        })

        //assertion
        cy.iframe('.cke_wysiwyg_frame').should('contain.text', 'Cypress Testing').and('contain.html', 'strong')

    })
})