/// <reference types = 'cypress' />

describe('Verify both video options - Youtube and Vimeo', () => {


    it('Verify Youtube video feature', () => {

        cy.visit('https://demo.automationtesting.in/Youtube.html')


        //playing the video
        cy.iframe('[src="https://www.youtube.com/embed/wPECeNP1BoY"]').find('.ytp-play-button').as('btn')
            .should('have.attr', 'title').and('include', 'Play')

        cy.get('@btn').click({ force: true })
            .should('have.attr', 'data-title-no-tooltip')
            .and('include', 'Pause')

        cy.wait(10000)


        //pausing the video
        cy.get('@btn').click({ force: true })


    })

    it('Verify Vimeo video option', () => {
        cy.visit('https://demo.automationtesting.in/Vimeo.html')

        //playing the video
        cy.iframe('#foo').find('.PlayButton_module_playIcon__af9e9913')
            .as('PlayBtn')
            .should('have.attr', 'data-play-icon', 'true')

        cy.get('@PlayBtn').click()

        cy.wait(10000)

        //Pausing the video
        cy.iframe('#foo').find('.PlayButton_module_pauseIcon__af9e9913')
            .as('PauseBtn')
            .should('have.attr', 'data-pause-icon', 'true')
        cy.get('@PauseBtn').click()

    })

})