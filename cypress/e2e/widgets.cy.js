/// <reference types = 'cypress' />

describe('Access the widgets and verify thier functionalities', () => {


    it('Verify Accordion widget', () => {

        cy.visit('https://demo.automationtesting.in/Accordion.html')


        cy.get('.panel-default').then($headers => {
            // Loop over each header and click it to expand the corresponding content
            for (let i = 0; i < $headers.length; i++) {
                if (i == 0) {
                    cy.wrap($headers[i]).click().should('be.visible').and('contain.text', 'Automation Testing API')
                } else if (i == 1) {
                    cy.wrap($headers[i]).click().should('be.visible').and('contain.text', 'Single line code')
                } else if (i == 2) {
                    cy.wrap($headers[i]).click().should('be.visible').and('contain.text', 'chain the methods')
                } else if (i == 3) {
                    cy.wrap($headers[i]).click().should('be.visible').and('contain.text', 'NTest your web application')
                }

            }
        })
    })

    it('Verify autocomplete widget', () => {

        cy.visit('https://demo.automationtesting.in/AutoComplete.html')

        cy.get('#searchbox').should('be.enabled').type('Ind')
        // //trying to include all the result in an array & then iterate through each element
        cy.get("ul> li[role='presentation']").each(function ($ele, index, $list) {

            if ($ele.text() == "India") {
                cy.wrap($ele).click({ force: true })

            } else {
                cy.log($ele.text())

            }

        })
        cy.get('.ui-autocomplete-multiselect').should('contain.text', 'India')

    })

    it('Verify Datepicker widget One', () => {

        cy.visit('https://demo.automationtesting.in/Datepicker.html')


        //get date picker element
        cy.get('#datepicker1').click()

        //get calendar :#ui-datepicker-div
        cy.get('#ui-datepicker-div').should('be.visible')


        //calling methods to select date, we will declare them in command.js
        cy.selectYear(2022)
        cy.selectMonth('January')
        cy.selectOneDay(7)

        cy.get('#datepicker1').should('be.visible')

    })

    it('Verify Datepicker widget Two', () => {

        cy.visit('https://demo.automationtesting.in/Datepicker.html')


        //get date picker element
        cy.get('#datepicker2').click().type('10/10/2020{enter}').should('be.visible')

    })

    it('Verify Slider widget', () => {

        cy.visit('https://demo.automationtesting.in/Slider.html')
        cy.get('#slider')
            .invoke('attr', 'style', 'left: 84%;')
            .should('have.attr', 'style', 'left: 84%;')
    })

})