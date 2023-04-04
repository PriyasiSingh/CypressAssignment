/// <reference types = 'cypress' />
// import { RegistrationFields } from "./PageObjects/RegistrationFields"

describe('Access the windows and verify the functionality of the three window options provided', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')
        cy.viewport('macbook-16')
        cy.get('#email').click().type('priyasi.singh@axelerant.com')
        cy.get('#enterimg').click()
        cy.get('h2').should('have.text', 'Register')
        cy.get("[href='Windows.html']").click()

    })

    it('Verify new tab window', () => {

        cy.get("[href='#Tabbed']").click()

        cy.get("[href='http://www.selenium.dev']")
            .invoke('removeAttr', 'target')
            .click()

        cy.get('h1').should('have.text', 'Selenium automates browsers')


    })

    it('Verify new seperate window', () => {

    })

    it('Verify multiple window box', () => {

    })

})  