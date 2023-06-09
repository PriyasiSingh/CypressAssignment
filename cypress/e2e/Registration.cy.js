/// <reference types = 'cypress' />
import { RegistrationFields } from "./PageObjects/RegistrationFields"

describe('Verify the registration form by testing it with valid, invalid, and empty inputs', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')

        //setting a viewport
        cy.viewport('macbook-16')

        //below step can be skipped also & directly we can click on arrow button
        cy.get('#email').click().type('priyasi.singh@axelerant.com')

        //clicking on the arrow to enter registration page
        cy.get('#enterimg')
            .click()

        cy.get('h2')
            .should('have.text', 'Register')

        //loading the fixture json data file which has details for registration
        cy.fixture('UserValidData').then(function (data) {
            this.data = data
        })

    })

    it.only('Registration form with valid input', function () {

        const registration = new RegistrationFields()

        registration.enterFirstname(this.data.firstName)
        registration.enterLastname(this.data.lastName)
        registration.enterEmailID(this.data.emailID)
        registration.enterPhone(this.data.phone)
        registration.selectGender()
        registration.selectHobbies()
        registration.selectLanguage(this.data.language)
        registration.selectDOB(this.data.DOB.year, this.data.DOB.month, this.data.DOB.day)
        registration.selectSkills(this.data.skill)
        registration.selectCountry(this.data.country)
        registration.enterfirstPassword(this.data.firstPassword)
        registration.entersecondPassword(this.data.secondPassword)
        registration.clickSubmit()

        //capturing the error message recieved due to select country box
        cy.get('#countries:invalid').invoke('prop', 'validationMessage').should('equal', 'Please select an item in the list.')

        //if it would have passed
        //cy.get('h2').should('have.value','Registartion success')

    })

    it('Registration form with invalid input', function () {

        const registration = new RegistrationFields()

        registration.enterFirstname(this.data.firstName)
        registration.enterLastname(this.data.lastName)

        //invalid email ID
        registration.enterEmailID('priyasisingh')
        registration.clickSubmit()
        cy.get('#eid > .form-control:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please include an \'@\' in the email address. \'priyasisingh\' is missing an \'@\'.')

        //invalid phone
        registration.enterEmailID(this.data.emailID)
        registration.enterPhone('234')
        registration.clickSubmit()
        cy.get(':nth-child(4) > .col-md-4 > .form-control:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Please match the format requested.')

    })

    it('Registration form with empty input', function () {

        const registration = new RegistrationFields()

        //empty firstaname
        registration.enterFirstname('')
        registration.clickSubmit()
        cy.get(':nth-child(1) > :nth-child(2) > .form-control:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill in this field.')

        //empty gender
        registration.enterFirstname(this.data.firstName)
        registration.enterLastname(this.data.lastName)
        registration.enterEmailID(this.data.emailID)
        registration.enterPhone(this.data.phone)
        registration.clickSubmit()
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Please select one of these options.')


    })
})
