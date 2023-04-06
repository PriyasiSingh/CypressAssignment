/// <reference types = 'cypress' />

describe('Verify the format options, image and table properties in the CKEditor under the WYSIWYG menu', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/CKEditor.html')
    })


    it('Verify the format option in CKEditor', () => {

        cy.frameLoaded('.cke_wysiwyg_frame').should('be.visible')

        cy.iframe('.cke_wysiwyg_frame').clear().type('Cypress Testing {selectAll}')
        cy.get('#cke_35').click()               //bold
        cy.get('#cke_36').click()               //italic
        cy.get('#cke_13').click()               //copy(not permitted)    

        //assertion
        cy.iframe('.cke_wysiwyg_frame').should('contain.text', 'Cypress Testing').and('contain.html', 'strong')

    })

    it('Verify the image option in CKEditor', () => {

        cy.frameLoaded('.cke_wysiwyg_frame').should('be.visible')

        cy.iframe('.cke_wysiwyg_frame').clear()
        cy.get('#cke_26').click()               //adding image

        //capturing the opened window
        cy.window().then((win) => {
            cy.stub(win, 'open').as('WinOpen')
        })

        //adding the url for the image
        cy.get('#cke_76_textInput').type('https://www.cypress.io/cypress_logo_social.png')
        cy.get('#cke_134_label').click()

        //verifying correct image is loadeed
        cy.get('.cke_wysiwyg_frame').then(($editor) => {
            const $editorData = $editor.contents().find('body > p')
            cy.wrap($editorData).find('img').should('have.attr', 'src').and('include', 'cypress_logo_social')
        })

    })

    it('Verify the table properties in CKEditor', () => {

        cy.frameLoaded('.cke_wysiwyg_frame').should('be.visible')

        cy.iframe('.cke_wysiwyg_frame').clear()
        cy.get('#cke_27').click()               //adding table

        //capturing the opened window
        cy.window().then((win) => {
            cy.stub(win, 'open').as('WinOpen')
        })

        //setting properties for the table
        cy.get('#cke_71_textInput').clear().type('3')
        cy.get('#cke_74_textInput').clear().type('2')
        cy.get('#cke_78_select').select('row')
        cy.get('#cke_84_select').select('center')
        cy.get('#cke_118_label').click()

        //verifying table is added
        cy.get('.cke_wysiwyg_frame').then(($editor) => {
            const $editorData = $editor.contents().find('body > table')
            cy.wrap($editorData).should('contain.html', 'thead')
        })

    })


})
