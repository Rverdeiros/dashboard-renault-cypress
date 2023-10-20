class header {

    singInSignUp() {
        cy.get('.css-uzlgmh > p').should('have.text', 'Crear cuenta / Iniciar sesión')
            .click()

        cy.get('.css-3g02u1')
            .should('be.visible')
            .should('have.text', 'Iniciar sesión o crear cuenta')
        
    }
    validateUser(user){
        cy.get('div[aria-haspopup="dialog"] button')
            .should('be.visible', {timeout: 10000})
            .should('have.text', user.name + user.lastName)

    }
}

export default new header()