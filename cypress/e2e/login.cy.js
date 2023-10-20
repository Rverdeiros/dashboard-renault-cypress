import loginUsers from '../fixtures/login_users.json'
import loginPage from "../support/pages/LoginPage"
import homePage from '../support/pages/HomePage'

describe('Efetuar Login', () => {
    
    beforeEach(() => {
        //Aceitar os cookies
        cy.setCookie('REN_ACCEPTED_TRUST', '%5B%22web-analysis%22%2C%22content-preferences%22%2C%22marketing%22%2C%22social-media%22%5D')
        //Definir localização
        cy.setCookie('REN_LOCATION', '%7B%22city%22%3A%7B%22id%22%3A%22ae3cc247-50c9-43bd-bf74-6df4c31c9457%22%2C%22cityName%22%3A%22ALVARO%20OBREG%C3%93N%22%2C%22capital%22%3Atrue%2C%22location%22%3A%7B%22lat%22%3A19.4302678%2C%22lng%22%3A-99.1373136%7D%7D%2C%22provincie%22%3A%7B%22id%22%3A%22189eefb5-1812-4d71-afb9-af63cabfe8ea%22%2C%22stateName%22%3A%22CDMX%22%7D%7D')
    })
    it.only('login com sucesso', () => {
        const user = loginUsers.valid_user
        //Dado que eu tenho um usuário cadastrado
        //Quando faço login no e-comm a partir da home
        //Então devo acessar a home autenticado.

        loginPage.goToLoginPage()
        loginPage.fill(user)
        loginPage.submit()

        homePage.header.validateUser(user)
    })


    it('tentar fazer o login sem digitar a senha', () => {
        const user = loginUsers.empty_password

        //Dado que eu tenho um usuário cadastrado
        //Quando tento realizar o login sem digitar uma senha
        //Então o botão de iniciar sesión fica desabilitado

        loginPage.goToLoginPage()
        loginPage.fill(user)
        loginPage.loginButtonIsDisabled()
    })

    it('tentar fazer o login sem digitar o e-mail', () => {
        const user = loginUsers.empty_email

        //Dado que eu tenho um usuário cadastrado
        //Quando tento realizar o login sem digitar um e-mail
        //Então o botão de iniciar sesión fica desabilitado

        loginPage.goToLoginPage()
        loginPage.fill(user)
        loginPage.loginButtonIsDisabled()
    })

    it('tentar fazer o login com e-mail inválido', () => {
        const user = loginUsers.inv_emails

        //Dado que eu tenho um usuário cadastrado
        //Quando tento realizar o login com um endereço de e-mail inválido
        //Então eu vejo um alerta no campo que o endereço de e-mail digitado é inválido

        user.forEach((u) => {
            loginPage.goToLoginPage()
            loginPage.fill(u)

            loginPage.invalidEmailAlert()
        })
    })

    it('tentar fazer o login com senha inválida', () => {
        const user = loginUsers.inv_pass

        //Dado que eu tenho um usuário cadastrado
        //Quando tento realizar o login com uma senha incorreta
        //Então eu vejo uma modal informando que as credenciais não são válidas

        loginPage.goToLoginPage()
        loginPage.fill(user)
        loginPage.submit()

        loginPage.modal.invalidCredentials()
    })

    it('tentar fazer o login com senha menor que 8 caracteres', () => {
        const user = loginUsers.short_pass

        //Dado que eu tenho um usuário cadastrado
        //Quando tento realizar o login com uma senha menor que 8 caracteres
        //Então eu vejo um alerta informando que a senha deve conter no mínimo 8 caracteres
        //E o botão de iniciar sesión fica desabilitado

        loginPage.goToLoginPage()
        loginPage.fill(user)

        loginPage.shortPasswordAlert()
        loginPage.loginButtonIsDisabled()
    })
})




