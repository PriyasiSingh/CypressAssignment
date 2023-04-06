require('@4tw/cypress-drag-drop');
require('cypress-iframe');

//for handling the angular exception
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

//Dateselector 
//1. Year Selector
Cypress.Commands.add('selectYear', (yearName) => {

    //getting the current year
    const currentYear = new Date().getFullYear()

    cy.get('.ui-datepicker-year').then(($year) => {
        if ($year.text() == yearName) {
            cy.log(yearName + ' year is selected')
            return
        }
        else {
            if (yearName < currentYear) {
                cy.get('a.ui-datepicker-prev').click()
            }
            else if (yearName > currentYear) {
                cy.get('a.ui-datepicker-next').click()
            }

        }
        cy.selectYear(yearName)
    })

})

import { DateUtils } from "./dateUtils/DateUtils"
var dateutils = new DateUtils()

//2. Month Selector
Cypress.Commands.add('selectMonth', (monthName) => {

    //getting the current month
    let currentMonth = new Date().getMonth
    let givenMonth = dateutils.getMonthIndexFromName(monthName)

    cy.get('.ui-datepicker-month').then(($month) => {
        if ($month.text() == monthName) {
            cy.log(monthName + ' month is selected')
            return
        }
        else {
            if (monthName < currentMonth) {
                cy.get('a.ui-datepicker-prev').click()
            }
            else if (monthName > currentMonth) {
                cy.get('a.ui-datepicker-next').click()
            }

        }
        cy.selectMonth(monthName)
    })

})

//3. Day selector
Cypress.Commands.add('selectOneDay', (dayName) => {

    cy.get('table.ui-datepicker-calendar a.ui-state-default').eq(dayName - 1).click()
    cy.log(dayName + ' day is selected')

})