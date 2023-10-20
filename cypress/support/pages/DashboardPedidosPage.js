import header from './components/DashboardHeader'

class DashboardPedidosPage {

    constructor() {
        this.header = header
    }

    pedidos(){
        cy.get('.css-14fpftm')
    }
}

export default new DashboardPedidosPage()