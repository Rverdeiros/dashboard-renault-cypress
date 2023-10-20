class modals {

    invalidCredentials() {
        cy.get('header.chakra-modal__header span', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', 'NO PUEDE INICIAR SESIÓN')

        cy.get('div.chakra-modal__content-container p', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', 'Correo o contraseña incorrecto.')
    }

    dashboardInvalidLogin() {
        cy.get('header.chakra-modal__header')
            .should('be.visible')
            .should('have.text', 'CANNOT LOGIN')

        cy.get('section.chakra-modal__content p')
            .should('have.text', 'Wrong email or password.')
    }
}

export default new modals()