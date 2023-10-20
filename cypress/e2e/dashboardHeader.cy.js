import dashboardLogin from '../support/pages/DashboardLoginPage'
import dashboardUsers from '../fixtures/dashboard_users.json'
import dashboardPedidos from '../support/pages/DashboardPedidosPage'
import dashboardHeader from '../support/pages/components/DashboardHeader'

describe('Testes Header Dashboard', () => {

    it.only('Apresentar o nome do usuário logado (Nome e último sobrenome)', () => {
        const user = dashboardUsers.valid_user

        dashboardLogin.dashboardGo()

        
        dashboardLogin.fill(user)
        dashboardLogin.showAvailableCountries()
        dashboardLogin.selectCountry('Mexico')
        
        dashboardLogin.submitLogin()
        
    })
    
    it('Dever ser possível ao usuário realizar o logoff', () => {

        // Dever ser possível ao usuário realizar o logoff
        // Ao realizar o logoff levar o usuário para a página de login


    })

   

})



// O header poderá ser acessado pelo usuário em qualquer parte da jornada - 
// Apresentar o nome do usuário logado (Nome e último sobrenome)
