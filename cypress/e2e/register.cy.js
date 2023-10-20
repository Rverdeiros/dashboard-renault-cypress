import registerUsers from '../fixtures/register_users.json'
import registerPage from '../support/pages/RegisterPage'

describe('Efetuar um cadastro na loja', () => {
    beforeEach(() => {
        //Aceitar os cookies
        cy.setCookie('REN_ACCEPTED_TRUST', '%5B%22web-analysis%22%2C%22content-preferences%22%2C%22marketing%22%2C%22social-media%22%5D')
        //Definir localização
        cy.setCookie('REN_LOCATION', '%7B%22city%22%3A%7B%22id%22%3A%22ae3cc247-50c9-43bd-bf74-6df4c31c9457%22%2C%22cityName%22%3A%22ALVARO%20OBREG%C3%93N%22%2C%22capital%22%3Atrue%2C%22location%22%3A%7B%22lat%22%3A19.4302678%2C%22lng%22%3A-99.1373136%7D%7D%2C%22provincie%22%3A%7B%22id%22%3A%22189eefb5-1812-4d71-afb9-af63cabfe8ea%22%2C%22stateName%22%3A%22CDMX%22%7D%7D')
    })

    it('1. Ao acessar a página de cadastro/login o cliente deve visualizar primeiramente a aba de "Crear cuenta", sendo possível alternar para "iniciar sessión"', () => {

        registerPage.goToRegisterPage()
        registerPage.registerTabVisible()

    })

    it('2. Solicitar ao usuário as seguintes informações: nombre, segundo nombre, apellido paterno, apellido materno, correo electrónico, teléfono, RCF (persona física) e código postal.', () => {

        registerPage.goToRegisterPage()
        registerPage.validateUserFields()

    })

    it('3.1 Dados inválidos - No campo do RCF será possível apenas a inclusão de 13 caracteres alfanuméricos', () => {
        const user = registerUsers.invalid_rfc

        registerPage.goToRegisterPage()
        
        user.forEach((u) => {
            registerPage.fillRegisterForm(u)
            registerPage.visibleRFCAlert()
        })

    })

    it('3.2 Dados válidos - No campo do RCF será possível apenas a inclusão de 13 caracteres alfanuméricos', () => {
        const user = registerUsers.valid_user

        registerPage.goToRegisterPage()
        
        registerPage.fillRegisterForm(user)
        registerPage.notVisibleRFCAlert()
    })

})

it('4.1 - Dados inválidos - No campo Celular o Teléfono é necessário que o número digitado contenha 10 dígitos', () =>{
    const user = registerUsers.invalid_phone

    registerPage.goToRegisterPage()
        
    user.forEach((u) => {
        registerPage.fillRegisterForm(u)
        registerPage.visiblePhoneAlert()
    })
})
it.only('4.1 - Dados inválidos - No campo Celular o Teléfono é necessário que o número digitado contenha 10 dígitos', ()=>{
    const user = registerUsers.invalid_phone

    registerPage.goToRegisterPage()
        
    registerPage.fillRegisterForm(user)
    registerPage.visiblePhoneAlert()
})

it('4.2 - Dados válidos - No campo Celular o Teléfono é necessário que o número digitado contenha 10 dígitos', ()=>{
    const user = registerUsers.valid_user

    registerPage.goToRegisterPage()
        
    registerPage.fillRegisterForm(user)
    registerPage.notVisiblePhoneAlert()
})
it('5.1 - Dados inválidos - O campo Código Postal apenas irá aceitar 5 caracteres', ()=>{

})

it('5.2 - Dados válidos - O campo Código Postal apenas irá aceitar 5 caracteres', ()=>{

})
// O campo Código Postal apenas irá aceitar 5 caracteres
// Caso o usuário insira dados diferentes das regras de validação apresentar a mensagem de erro

// Possibilitar ao usuário a criação de uma senha
// Deve ser possível ao usuário visualizar ou ocultar os caracteres que estão sendo digitados
// Exibir as regras para criação de senha: uma letra maiúscula, um letra minúscula, um número, um caractere especial e no mínimo 8 caracteres.
// Enquanto o usuário está digitando a senha indicar quais regras já estão sendo atendidas

// Solicitar o consentimento do usuário sobre os Términos y condiciones
// Solicitar ao usuário a confirmação da leitura do Aviso de privacidade
// Quando o usuário vizualizar os campos de aceite os mesmos não podem estar selecionados. Esta ação precisa ser feita pelo usuário.

// Não permitir que o usuário avance sem aceitar os termos de consentimento (bloquear o botão até o aceite)

// Após o cliente realizar o cadastro, apresentar o modal de sucesso
// Após finalizar o cadastro direcionar o usuário para a tab de login

// Caso o e-mail indicado já esteja sendo utilizado em um cadastro existente informar ao usuário e não concluir o cadastro

// Na versão desktop o Header ficará apenas ao lado esquerdo da página
// Apenas na versão desktop apresentaremos do lado esquerdo da página os benefícios da criação da conta, sendo estes ocultados na versão mobile

// Na versão mobile e tablet o header seguirá seu comportamento padrão
