import LoginPage from '../PageObjects/LoginPage'

describe('describe block', function(){

    it('it block', function(){

         const lp=new LoginPage()
         lp.visit()
         lp.fillEmail('admin@yourstore.com')
         lp.fillPassword('admin')
         lp.submit()
         cy.title().should('be.equal','Dashboard / nopCommerce administration')
         


    })

})