/// <reference types = 'cypress' />

describe('Verify the selectable and resizable features', () => {


    it('Verify selectable feature', () => {

        cy.visit('https://demo.automationtesting.in/Selectable.html')

        //Verify default behaviour of selectable feature
        cy.get('[href="#Default"]').click()
        cy.get('ul.deaultFunc li.ui-widget-content').each(($ele) => {
            cy.wrap($ele).click()
            cy.get('ul.deaultFunc li.selected').should('have.attr', 'class').and('include', 'selected')
        })

        //Verify serialize behaviour of selectable feature
        cy.get('[href="#Serialize"]').click()

        cy.get('ul.SerializeFunc li.ui-widget-content').each(($ele) => {
            cy.wrap($ele).click()
            const text = cy.get('ul.SerializeFunc li.selected b').then(($data) => {

                // store the button's text
                const dataText = $data.text()
                cy.log(dataText)
                cy.get('#feedback #result').then(($result) => {
                    const resultData = $data.text()
                    cy.log(resultData)
                    assert.equal(dataText, resultData)
                })
            })
        })

    })

    it('Verify resizable element', () => {
        cy.visit('https://demo.automationtesting.in/Resizable.html')
        cy.get('#resizable')
            .invoke('attr', 'style', 'width: 732px; height: 221px;')
            .should('have.attr', 'style', 'width: 732px; height: 221px;')
    })

})