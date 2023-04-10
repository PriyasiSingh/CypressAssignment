/// <reference types = 'cypress' />
/// <reference types= 'cypress-downloadFile' />

describe('verify file upload and download functionality by generating a .txt file', () => {


    it('Verify the file upload functionality', () => {
        cy.visit('https://demo.automationtesting.in/FileUpload.html')

        cy.get('#input-4').attachFile('Data.txt')
        cy.get('.fileinput-upload').should('be.visible').and('be.enabled').click()
        //unable to assert since clicking on upload is not returning anything

    })

    it('Verify the file download functionality', () => {
        cy.visit('https://demo.automationtesting.in/FileDownload.html')

        //Direct download
        //for page to stop waiting for another pag eto load we use the following
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                // this adds a listener that reloads your page 
                // after 5 seconds from clicking the download button
                setTimeout(function () { doc.location.reload() }, 5000)
            })
        })

        cy.get('.btn-primary').click()
        // cy.readFile('./cypress/downloads/samplefile.pdf').should('exist')  //causing lot of memory to read so will just check if file is generated
        cy.verifyDownload('samplefile.pdf')

        //Txt file download
        cy.get('#textbox').type('Cypress testing is the latest trend TEXT!')
        cy.get('#createTxt').should('be.enabled').click()
        cy.get('#link-to-download').should('be.visible').click()
        cy.readFile('./cypress/downloads/info.txt').should('contain', 'Cypress testing is the latest trend TEXT!')

        //pdf File download
        cy.get('#pdfbox').type('Cypress testing is the latest trend PDF!')
        cy.get('#createPdf').should('be.enabled').click()
        cy.get('#pdf-link-to-download').should('be.visible').click()
        cy.readFile('./cypress/downloads/info.pdf').should('contain', 'Cypress testing is the latest trend PDF!')


    })




})
