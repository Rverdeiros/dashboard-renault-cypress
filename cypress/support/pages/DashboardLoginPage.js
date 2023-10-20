import modal from './components/modals'

class DashboardLoginPage {

    constructor() {
        this.modal = modal
    }

    dashboardGo() {
        cy.visit('https://app-dhb.ext.gke2.dev.gcp.renault.com/', { timeout: 10000 }).viewport(1920, 1080)
    }

    showPassword() {
        cy.get('div.chakra-input__right-element.css-7h9h6a').click()
        cy.get('#password').should('have.attr', 'type', 'text')
    }

    hidePassword() {
        cy.get('div.chakra-input__right-element.css-7h9h6a').click()
        cy.get('#password').should('have.attr', 'type', 'password')
    }

    availableCountries(first, second, third, fourth) {
        cy.get('#react-select-2-option-0')
            .should('be.visible')
            .should('have.text', first)

        cy.get('#react-select-2-option-1')
            .should('be.visible')
            .should('have.text', second)

        cy.get('#react-select-2-option-2')
            .should('be.visible')
            .should('have.text', third)

        cy.get('#react-select-2-option-3')
            .should('be.visible')
            .should('have.text', fourth)

        cy.get('#react-select-2-option-4')
            .should('not.exist')
    }

    fill(user) {
        user.email ? cy.get('#email').clear({ force: true }).type(user.email) : cy.log('empty email')
        user.password ? cy.get('#password').clear({ force: true }).type(user.password) : cy.log('empty password')
    }

    submitLogin() {
        // cy.intercept("POST", "https://api-emx.ext.gke2.dev.gcp.renault.com/api/dashboard/login").as("loginRequest");
        // cy.intercept("POST", "http://localhost:3000/api/auth/callback/credentials").as("loginRequest");
        cy.get('[data-cy="submitButton"]').realClick()

        // cy.wait("@loginRequest", { timeout: 30000 }).then((xhr) => {
        //     expect(xhr.status).to.eq(200);
        // });

        // cy.url().should("include", "/mx/pedidos");
    }

    showAvailableCountries() {
        cy.get('.css-hfbj6y').click()
    }

    selectCountry(text) {
        cy.contains(text).click()
    }

    disabledButton() {
        cy.get('[data-cy="submitButton"]')
            .should('have.attr', 'disabled')
    }

    enabledButton() {
        cy.get('[data-cy="submitButton"]')
            .should('not.have.attr', 'disabled')
    }

    invalidEmailAlert() {
        cy.get('.css-8pyn4v')
            .should('have.text', 'invalid email')
            .parents('form[data-cy="loginForm"]')
            .children('.css-1yy1l99')
            .contains('email')

    }

    requiredField() {
        cy.get('#email').click()
        cy.get('#password').click()

        cy.contains('Login').click()

        cy.get('div.chakra-form__error-message').eq(0).should('have.text', 'required field')
        cy.get('div.chakra-form__error-message').eq(1).should('have.text', 'required field')

    }


}

export default new DashboardLoginPage()