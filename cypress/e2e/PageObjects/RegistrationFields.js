export class RegistrationFields {
    RegPage_textbox_firstname = 'input[placeholder="First Name"]'
    RegPage_textbox_lastname = 'input[placeholder="Last Name"]'
    RegPage_textbox_emailID = '#eid > .form-control'
    RegPage_textbox_phone = 'input[ng-model="Phone"]'
    RegPage_radio_gender = 'input[value="FeMale"]'
    RegPage_select_skills = '#Skills'
    RegPage_select_countries = '#countries'
    RegPage_textbox_firstpassword = '#firstpassword'
    RegPage_textbox_secondpassword = '#secondpassword'
    RegPage_btn_submit = '#submitbtn'



    enterFirstname(uname) {
        cy.get(this.RegPage_textbox_firstname).type(uname)
    }

    enterLastname(lname) {
        cy.get(this.RegPage_textbox_lastname).type(lname)

    }

    enterEmailID(eid) {
        cy.get(this.RegPage_textbox_emailID).type(eid)

    }

    enterPhone(phone) {
        cy.get(this.RegPage_textbox_phone).type(phone)

    }

    selectGender() {
        cy.get(this.RegPage_radio_gender).check()

    }

    selectSkills(skill) {
        cy.get(this.RegPage_select_skills).select(skill).should('have.value', skill)

    }

    selectCountry(country) {
        cy.get(this.RegPage_select_countries).select(country)

    }

    enterfirstPassword(fpswd) {
        cy.get(this.RegPage_textbox_firstpassword).type(fpswd)

    }

    entersecondPassword(spswd) {
        cy.get(this.RegPage_textbox_secondpassword).type(spswd)

    }

    clickSubmit() {
        cy.get(this.RegPage_btn_submit).should('be.enabled').click()

    }

}


// cy.get('').type(this.data.lastName)
// cy.get().type(this.data.emailID)
// cy.get().type(this.data.phone)
// cy.get().check()
// cy.get('input[type="checkbox"]').click({ multiple: true })
// // cy.get('input[value="Movies"]').check()
// cy.get(').select('APIs').should('have.value', 'APIs')
// cy.get().select('Select Country')
// cy.get().type(this.data.firstPassword)
// cy.get().type(this.data.secondPassword)
// cy.get().should('be.enabled').click()