/// <reference types = 'cypress' />
// import { RegistrationFields } from "./PageObjects/RegistrationFields"

describe('Access the alerts and verify the functionality of the three alert options provided', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Alerts.html')
        cy.viewport('macbook-16')

    })

    it('Verify Alert with OK', () => {

        cy.contains('Alert with OK').click()
        cy.get('#OKTab > .btn').click()

        //validating alert message    
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('I am an alert box!');
        })

        //verifying if cursor can click another element on webpage
        cy.get("[href='#CancelTab']").click()
    })

    it('Verify Confirm box', () => {

        cy.get("[href='#CancelTab']").click()
        cy.get('.btn-primary').click()

        //validating confirm text
        cy.on('window:confirm', (confirmText) => {
            //assertions
            expect(confirmText).to.contains('Press a Button !');
            return true
        })

        cy.get('#demo').contains('You pressed Ok')

        //verifying if cursor can click another element on webpage
        cy.get("[href='#Textbox']").click()
    })

    it('Verify prompt box', () => {

        cy.get("[href='#Textbox']").click()
        cy.get('.btn-info').click()

        //validating prompt text and entering data
        // cy.window().then(function (promptWin) {
        //     cy.stub(promptWin, 'prompt').returns('Mr.Bean')
        //     cy.contains('Please enter your name').click()
        //     // cy.get('button#prompt').click();
        // })

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('Mr.Bean')
            cy.get('#demo').then(($demo) => {
                const oldAlert = win.alert
                win.alert = function (msg) {
                    $demo.text(msg)
                    oldAlert.call(win, msg)
                }
                cy.get('#prompt-demo').click()
            })
        })

        cy.get('#demo1').contains('Hello Mr.Bean How are you today ')
    })

})  