/// <reference types = 'cypress' />
// import { RegistrationFields } from "./PageObjects/RegistrationFields"

describe('Access the windows and verify the functionality of the three window options provided', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')
        // cy.viewport('macbook-16')
        cy.get('#email').click().type('priyasi.singh@axelerant.com')
        cy.get('#enterimg').click()
        cy.get('h2').should('have.text', 'Register')
        cy.get("[href='Windows.html']").click()

    })

    it('Verify new tab window', () => {

        Cypress.config('pageLoadTimeout', 10000);

        cy.get("[href='#Tabbed']").click()


        //remove the target via dev tools, the link properly opens in the same browser tab. 
        //But this doesn't happen when I use invoke('removeAttr', 'target')
        // cy.get("[href='http://www.selenium.dev']")
        //     .invoke("removeAttr", "target")
        //     .click()

        // cy.get("[href='http://www.selenium.dev']").then(link => {
        //     cy.request(link.prop('href')).its('status').should('eq', 200)
        // })

        cy.get("[href='http://www.selenium.dev']").invoke("removeAttr", "target")
        cy.get("[href='http://www.selenium.dev']").click()
        cy.location().then(yieldedObject => cy.log(yieldedObject.href))

        cy.get('h1').should('have.text', 'Selenium automates browsers')


    })

    it('Verify new seperate window', () => {
        cy.get("[href='#Seperate']").click()

        cy.window().then(function (win) {
            cy.stub(win, 'open').returns(url => {
                win.location.href = 'https://www.selenium.dev/';
            }).as("popup")
        })

        cy.get('.btn-primary').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'Selenium')

    })

    it('Verify multiple window box', () => {

        cy.get("[href='#Multiple']").click()

        cy.get('#Multiple > .btn')
            .invoke("removeAttr", "onclick")
            .click()

    })

})  