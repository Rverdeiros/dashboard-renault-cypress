import homePage from '../support/pages/HomePage'


describe('testes da home', () => {

    beforeEach(() => {
        //Aceitar os cookies
        cy.setCookie('REN_ACCEPTED_TRUST', '%5B%22web-analysis%22%2C%22content-preferences%22%2C%22marketing%22%2C%22social-media%22%5D')
        //Definir localização
        cy.setCookie('REN_LOCATION', '%7B%22city%22%3A%7B%22id%22%3A%22ae3cc247-50c9-43bd-bf74-6df4c31c9457%22%2C%22cityName%22%3A%22ALVARO%20OBREG%C3%93N%22%2C%22capital%22%3Atrue%2C%22location%22%3A%7B%22lat%22%3A19.4302678%2C%22lng%22%3A-99.1373136%7D%7D%2C%22provincie%22%3A%7B%22id%22%3A%22189eefb5-1812-4d71-afb9-af63cabfe8ea%22%2C%22stateName%22%3A%22CDMX%22%7D%7D')

        cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/', { timeout: 10000 }).viewport(1920,1080)
    })

    it('Validar os modelos da home', () => {
        cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/')

        cy.get('h1.chakra-text')
            .eq(0)
            .should('have.text', 'Renault Koleos')

    })
    it.only('Validar as key Features do Koleos na home', () => {
        
        homePage.validateHomeKeyFeatures()

    })

    // it.only('criar conta/iniciar sessão', ()=>{

    // })


})
