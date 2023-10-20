import modal from './components/modals'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    goToLoginPage() {
        cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/session/iniciar-sesion', { timeout: 10000 }).viewport(1920, 1080)
    }

    fill(user) {
        //Definindo um ALIAS para os elementos referentes aos campos
        cy.get('#email').clear({ force: true }).as('email')
        cy.get('#password').clear({ force: true }).as('password')

        //Não usamos o comando IF. A condição é passada através da interrogação, seguida do comando caso positivo e o comando caso negativo vem após os dois pontos.
        user.email ? cy.get('@email').type(user.email) : cy.log('empty email')
        user.password ? cy.get('@password').type(user.password) : cy.log('empty email')
    }

    submit() {
        cy.get('button[type="submit"]')
            .should('have.text', 'iniciar  sesión ')
            .click()
    }

    loginButtonIsDisabled() {
        cy.get('button[type="submit"]')
            .should('be.visible')
            .should('have.attr', 'disabled')
    }

    invalidEmailAlert() {
        cy.get('[data-testid="input-form-label"]').eq(0).should('have.text', 'correo electrónico')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('have.text', 'correo electrónico inválido')

    }

    shortPasswordAlert() {
        cy.get('[data-testid="input-form-label"]').eq(1).should('have.text', 'contraseña')
            .parents('.css-1kxonj9')
            .children('.css-8pyn4v')
            .should('have.text', 'mínimo de 8 caracteres')
    }
}

export default new LoginPage()