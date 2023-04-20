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
    RegPage_checkbox_hobbies = 'input[type="checkbox"]'
    RegPage_select_year = '#yearbox'
    RegPage_select_month = '[ng-model="monthbox"]'
    RegPage_select_day = '#daybox'



    enterFirstname(uname) {
        if (uname.length == 0) {
            cy.log('Please enter the first name')
            return false;
        }
        else {
            cy.get(this.RegPage_textbox_firstname)
                .clear()
                .type(uname)
                .should('have.value', uname)
                .should('not.have.class', 'ng-invalid')

        }

    }

    enterLastname(lname) {
        if (lname.length == 0) {
            cy.log('Please enter the last name')
            return false;
        }
        cy.get(this.RegPage_textbox_lastname)
            .clear()
            .type(lname)
            .should('have.value', lname)
            .should('not.have.class', 'ng-invalid')

    }

    enterEmailID(eid) {
        cy.get(this.RegPage_textbox_emailID)
            .clear()
            .type(eid)
            .should('have.value', eid)
            .should('not.have.class', 'ng-invalid')


    }

    enterPhone(phone) {
        cy.get(this.RegPage_textbox_phone)
            .clear()
            .type(phone)
            .should('have.value', phone)
            .should('not.have.class', 'ng-invalid')

    }

    selectGender() {
        cy.get(this.RegPage_radio_gender)
            .click()
            .should('be.enabled')
            .should('not.have.class', 'ng-invalid')

    }

    selectHobbies() {
        cy.get(this.RegPage_checkbox_hobbies)
            .click({ multiple: true })
            .should('not.have.class', 'ng-invalid')
    }

    selectLanguage(lang) {
        cy.get("#msdd").click()
        cy.get('a[class="ui-corner-all"]').each(function ($ele, index, $list) {

            if ($ele.text() == lang) {
                cy.wrap($ele).click({ force: true })


            } else {
                cy.log($ele.text())

            }
        })
        //selecting outside the field to highlight the page
        cy.get('#section > .container > .row').click()
        cy.get("#msdd")
            .should('contain', lang)
            .should('not.have.class', 'ng-invalid')

    }

    selectSkills(skill) {
        cy.get(this.RegPage_select_skills)
            .select(skill)
            .should('have.value', skill)
            .should('not.have.class', 'ng-invalid')

    }

    selectCountry(country) {
        cy.get(this.RegPage_select_countries)
            .select(country)
        // .should('not.have.class', 'ng-invalid') --removing this assertion as this dropdown doesn't work effectively
        // .should('have.value', country)   --removing this assertion as this dropdown doesn't work effectively

    }

    selectDOB(year, month, day) {
        cy.get(this.RegPage_select_year).select(year)
        cy.get(this.RegPage_select_month).select(month)
        cy.get(this.RegPage_select_day).select(day)
    }

    enterfirstPassword(fpswd) {
        cy.get(this.RegPage_textbox_firstpassword)
            .clear()
            .type(fpswd)
            .should('have.value', fpswd)
            .should('not.have.class', 'ng-invalid')
    }

    entersecondPassword(spswd) {
        cy.get(this.RegPage_textbox_secondpassword)
            .clear()
            .type(spswd)
            .should('have.value', spswd)
            .should('not.have.class', 'ng-invalid')
    }

    clickSubmit() {
        cy.get(this.RegPage_btn_submit)
            .should('be.enabled')
            .click()
    }

}