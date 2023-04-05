/// <reference types = 'cypress' />

describe('Access the frames and verify the functionality of both single and nested iframes', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Frames.html')

    })

    it('Verify Single frame', () => {

        cy.get("[href='#Single']").click().should('be.visible')

        //accessing frame & its element
        cy.get('#singleframe')
            .should('be.visible')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')


                cy.wrap($body).find(`input[type='text']`).should('be.visible').type('Cypress{enter}')
                cy.wrap($body).click()

            })


    })

    it('Verify Nested frame', () => {

        cy.get("[href='#Multiple']").click().should('be.visible')

        //accessing the first iframe
        cy.get('#Multiple > iframe').then($firstIframe => {
            const $secondIframeReference = $firstIframe.contents().find('body > section > div > div > iframe')

            // Saving this as a reference for further use
            cy.wrap($secondIframeReference).as('secondIframeReference')

            //accessing the second iframe
            cy.get('@secondIframeReference').then($secondIframe => {
                const $elementYouWant = $secondIframe.contents().find('body')

                cy.wrap($elementYouWant).find(`input[type='text']`).type("Cypress2")
                cy.wrap($elementYouWant).click()
            });
        });


    })

})  