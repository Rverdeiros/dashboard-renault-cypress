class DashboardHeader {

    validateUser(user){
        cy.get('[data-cy="header"]')
            .should('be.visible', {timeout: 10000})

        cy.get('p.chakra-text').eq(1)      
            .should('have.text', user.name +' '+user.lastName)
    }

    logoff(){

    }

}

export default new DashboardHeader()