import dashboard from '../support/pages/DashboardLoginPage'
import dashboardUsers from '../fixtures/dashboard_users.json'

describe('Testes Login Dashboard', () => {

    it('Deve ser possível ao usuário inserir seu e-mail e senha', () => {
        dashboard.dashboardGo()

        cy.get('form[data-cy="loginForm"] p')
            .should('be.visible')
            .should('have.text', 'Login')

        cy.get('label[for="email"]')
            .should('be.visible')
            .should('have.text', 'email')

        cy.get('label[for="password"]')
            .should('be.visible')
            .should('have.text', 'password')

    })
    it('Se o usuário digitar um e-mail sem o @ apresentar mensagem de erro', () => {
        const user = dashboardUsers.invalid_emails

        dashboard.dashboardGo()

        user.forEach((u) => {
            dashboard.fill(u)
            dashboard.invalidEmailAlert()
        })

    })
    it('Permitir ao usuário visualizar e ocultar a senha inserida', () => {
        const user = dashboardUsers.valid_user

        dashboard.dashboardGo()

        dashboard.fill(user)
        dashboard.showPassword()
        dashboard.hidePassword()

    })
    it('Disponibilizar o campo com a lista de países para os quais o Dashboard está disponível: Argentina, Brasil, Colombia, México', () => {
        dashboard.dashboardGo()

        cy.get('.css-hfbj6y').click()

        dashboard.availableCountries("Argentina", "Colombia", "Mexico", "Brasil")

    })
    it('Apenas será possível fazer o login após o preenchimento de todos os campos', () => {
        const user = dashboardUsers.valid_user

        dashboard.dashboardGo()

        dashboard.disabledButton()
        dashboard.fill(user)

        dashboard.showAvailableCountries()
        dashboard.selectCountry("Mexico")

        dashboard.enabledButton()

    })
    it('Caso os dados estejam incorretos apresentar o modal de erro', () => {
        const user = dashboardUsers.invalid_user
        
        dashboard.dashboardGo()

        dashboard.fill(user)
        
        dashboard.showAvailableCountries()
        dashboard.selectCountry("Mexico")
        
        dashboard.submitLogin()

        dashboard.modal.dashboardInvalidLogin()

    })

    it('Alertar o usuário sobre a obrigatoriedade de preenchimento dos campos',()=>{
        const user = dashboardUsers.empty_user


        dashboard.dashboardGo()
        dashboard.requiredField()
        


    })


})