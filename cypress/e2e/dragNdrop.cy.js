/// <reference types = 'cypress' />

describe('Verify the functionality of both static and dynamic drag and drop options', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')
        cy.viewport('macbook-16')
        cy.get('#enterimg').click()
        cy.get(':nth-child(1) > .dropdown-toggle').click()

    })

    it.only('Verify static drag & drop', () => {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        cy.xpath('//*[@id="header"]/nav/div/div[2]/ul/li[6]/ul/li[1]').each(($el, index, $list) => {
            var option = $el.text()
            cy.log(option + ' year is selected')
            if (option == 'Static') {
                cy.wrap($el).click()

            }
        })

        cy.url().should('contain', 'Static')



    })

    it('Verify Confirm box', () => {


    })

    it('Verify prompt box', () => {


    })

})  