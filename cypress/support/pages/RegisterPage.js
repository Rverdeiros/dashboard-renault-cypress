import modal from './components/modals'

class RegisterPage {

    constructor() {
        this.modal = modal
    }

    goToRegisterPage() {
        cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/session/crear-una-cuenta', { timeout: 10000 })
            .viewport(1920, 1080)
    }

    registerTabVisible() {

        cy.get('button[type="button"]').eq(0).should('have.text', 'INICIAR SESIÓN').should('have.attr', 'aria-selected', 'false')
        cy.get('button[type="button"]').eq(1).should('have.text', 'CREAR UNA CUENTA').should('have.attr', 'aria-selected', 'true')
    }

    validateUserFields() {

        cy.get('[data-testid="input-form-label"]').eq(0)
            .should('have.text', 'nombre')

        cy.get('[data-testid="input-form-label"]').eq(1)
            .should('have.text', 'segundo nombre')

        cy.get('[data-testid="input-form-label"]').eq(2)
            .should('have.text', 'apellido paterno')

        cy.get('[data-testid="input-form-label"]').eq(3)
            .should('have.text', 'apellido materno')

        cy.get('[data-testid="input-form-label"]').eq(4)
            .should('have.text', 'correo electrónico')

        cy.get('[data-testid="input-form-label"]').eq(5)
            .should('have.text', 'teléfono')

        cy.get('[data-testid="input-form-label"]').eq(6)
            .should('have.text', 'RFC (persona fisica)')

        cy.get('[data-testid="input-form-label"]').eq(7)
            .should('have.text', 'código postal')
    }

    fillRegisterForm(user) {
        user.name ? cy.get('#name').clear({ force: true }).type(user.name) : cy.log('empty name')
        user.secondName ? cy.get('#secondName').clear({ force: true }).type(user.secondName) : cy.log('empty secondName')
        user.fGivenName ? cy.get('#fatherName').clear({ force: true }).type(user.fGivenName) : cy.log('empty fGivenName')
        user.sGivenName ? cy.get('#motherName').clear({ force: true }).type(user.sGivenName) : cy.log('empty sGivenName')
        user.email ? cy.get('#email').clear({ force: true }).type(user.email) : cy.log('empty email')
        user.phone ? cy.get('#cellPhone').clear({ force: true }).type(user.phone) : cy.log('empty phone')
        user.rfcNumber ? cy.get('#rfcNumber').clear({ force: true }).type(user.rfcNumber) : cy.log('empty rfcNumber')
        user.zipCode ? cy.get('#zipCode').clear({ force: true }).type(user.zipCode) : cy.log('empty zipCode')
        user.password ? cy.get('#password').clear({ force: true }).type(user.password) : cy.log('empty password')
        user.passwordConfirmation ? cy.get('#passwordConfirmation').clear({ force: true }).type(user.passwordConfirmation) : cy.log('empty passwordConfirmation')
    }

    acceptTerms() {
        cy.get('#acceptedTerms').next().click()
        cy.get('#acceptedUseAndTerms').next().click()
    }

    visibleRFCAlert() {
        cy.get('label[for="rfcNumber"]')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('have.text', 'por favor, introduce información válida')
    }
    
    notVisibleRFCAlert() {
        cy.get('label[for="rfcNumber"]')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('not.exist')
    }

    visiblePhoneAlert(){
        cy.get('label[for="cellPhone"]')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('have.text', 'por favor, introduce información válida')
    }

    notVisiblePhoneAlert(){
        cy.get('label[for="cellPhone"]')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('not.exist')
    }


}
export default new RegisterPage()