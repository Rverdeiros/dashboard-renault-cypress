import header from './components/header'

class HomePage{

    constructor() {
        this.header = header
    }

    validateHomeKeyFeatures(){
        
        cy.get('div[id="parallax-main-container"] span').eq(2).should('have.text', 'Techo panorámico')
            .parents('.css-1whmr8s').prev('.css-qaovyi').contains('Koleos')

        cy.get('div[id="parallax-main-container"] span').eq(3).should('have.text', 'Sistema Easy Park Assist')
            .parents('.css-1whmr8s').prev('.css-qaovyi').contains('Koleos')

        cy.get('div[id="parallax-main-container"] span').eq(4).should('have.text', 'Apertura automática de cajuela')
            .parents('.css-1whmr8s').prev('.css-qaovyi').contains('Koleos')
    }
    
}
export default new HomePage()