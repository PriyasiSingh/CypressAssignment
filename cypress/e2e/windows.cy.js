/// <reference types = 'cypress' />
// import { RegistrationFields } from "./PageObjects/RegistrationFields"

describe('Access the windows and verify the functionality of the three window options provided', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Windows.html')
        cy.viewport('macbook-16')

    })

    it('Verify new tab window', () => {

        // Cypress.config('pageLoadTimeout', 10000);
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                // this adds a listener that reloads your page 
                // after 5 seconds from clicking the download button
                setTimeout(function () { doc.location.reload() }, 5000)
            })
        })

        cy.get("[href='#Tabbed']").click()


        // // remove the target via dev tools, the link properly opens in the same browser tab. 
        // // But this doesn't happen when I use invoke('removeAttr', 'target')
        cy.get("[href='http://www.selenium.dev']")
            .invoke("removeAttr", "target")
            .click()

        //validating the new page
        cy.get('h1').should('contains.text', 'Selenium automates browsers')


    })

    it('Verify new seperate window', () => {
        cy.get(':nth-child(2) > .analystic').click()

        cy.window().then(function (win) {
            cy.stub(win, 'open').returns(url => {
                win.location.href = 'https://www.selenium.dev/';
            }).as("popup")
        })

        cy.get('a > .btn').click()
        cy.get('@popup').should("be.called")

        //validating the new page
        cy.get('h1').should('contain.text', 'Selenium')

    })

    it('Verify multiple window box', () => {

        cy.get("[href='#Multiple']").click()

        cy.get('#Multiple > .btn')
            .invoke("removeAttr", "onclick")
            .click()

    })

})  