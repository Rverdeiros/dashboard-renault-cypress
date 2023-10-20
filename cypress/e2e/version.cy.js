describe('Validar as versões do Kwid', () => {

  beforeEach(() => {
    //Aceitar os cookies
    cy.setCookie('REN_ACCEPTED_TRUST', '%5B%22web-analysis%22%2C%22content-preferences%22%2C%22marketing%22%2C%22social-media%22%5D')
    //Definir localização
    cy.setCookie('REN_LOCATION', '%7B%22city%22%3A%7B%22id%22%3A%22ae3cc247-50c9-43bd-bf74-6df4c31c9457%22%2C%22cityName%22%3A%22ALVARO%20OBREG%C3%93N%22%2C%22capital%22%3Atrue%2C%22location%22%3A%7B%22lat%22%3A19.4302678%2C%22lng%22%3A-99.1373136%7D%7D%2C%22provincie%22%3A%7B%22id%22%3A%22189eefb5-1812-4d71-afb9-af63cabfe8ea%22%2C%22stateName%22%3A%22CDMX%22%7D%7D')
  })

  it('Key Features Kwid Iconic TM', () => {

    cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/configurador/52262055-bb10-4d4f-ada9-1be449fa14cc/versiones').viewport(1920, 1080)

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Computadora de viaje')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Gear Shift Indicator')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas al conducir')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas eléctrico')
  })

  it('Key Features Kwid Outsider TM', () => {

    cy.visit('https://app-emx.ext.gke2.int.gcp.renault.com/configurador/52262055-bb10-4d4f-ada9-1be449fa14cc/versiones').viewport(1920, 1080)

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Computadora de viaje')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Gear Shift Indicator')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas al conducir')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas eléctrico')
  })
  it('Key Features Kwid Bitono TM', () => {

    cy.visit('https://app-emx.ext.gke2.int.gcp.renault.com/configurador/52262055-bb10-4d4f-ada9-1be449fa14cc/versiones').viewport(1920, 1080)

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-2 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Computadora de viaje')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-2 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Gear Shift Indicator')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-2 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas al conducir')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-2 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas eléctrico')
  })

  it('Key Features Kwid Outsider TM', () => {

    cy.visit('https://app-emx.ext.gke2.int.gcp.renault.com/configurador/52262055-bb10-4d4f-ada9-1be449fa14cc/versiones').viewport(1920, 1080)

    cy.get('.rec-carousel > button:last-child',{timeout: 10000}).click()

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Computadora de viaje')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Gear Shift Indicator')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas al conducir')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Cierre de puertas eléctrico')
  })
  
  it('Key Features Koleos Intens', () => {

    cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/configurador/f7bb1b63-3615-4976-bbe4-7c92a20caea7/versiones').viewport(1920, 1080)

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Repetidores laterales')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Barras de techo con acabado aluminio')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Llanta de refacción temporal')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Vidrios tintados')
  })

  it('Key Features Koleos Iconic', () => {

    cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/configurador/f7bb1b63-3615-4976-bbe4-7c92a20caea7/versiones').viewport(1920, 1080)

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(1) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Repetidores laterales')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Barras de techo con acabado aluminio')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Llanta de refacción temporal')

    cy.get('div[class="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible"] li:nth-child(4) div:nth-child(1) div:nth-child(1) p:nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', 'Vidrios tintados')
  })

  it.only('teste', () => {

    cy.visit('https://app-emx.ext.gke2.dev.gcp.renault.com/configurador/f7bb1b63-3615-4976-bbe4-7c92a20caea7/versiones').viewport(1920, 1080)

    cy.get('ul[role="list"] p').eq(1).should('have.text', 'Repetidores laterales')
      .parents('#86a2d019-dd81-4e7f-860d-73c22306ec20')
      .contains('Intens')
  })
})