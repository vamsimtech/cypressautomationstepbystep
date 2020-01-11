//author vamsi

describe('Login', function(){

    Cypress.config('pageLoadTimeout', 100000)

    before(function(){
        cy.SignIn()
    })

    it('Create a post', function(){

        //cy.contains('New Post').click()
      //  cy.get('ul.navbar-nav').children().contains('New Post').click()

      cy.get('ul.navbar-nav').children().as('menu')
      cy.get('@menu').contains('New Post').click()

        cy.hash().should('include','#/editor')
        //cy.location('hash').should('include','#/editor')

        cy.get('form').within(($form)=>{
            // cy.get('input[placeholder="Article Title"]').type('Test')
            // cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
            // cy.get('input[placeholder="Write your article (in markdown)"]').type('Test 2')

            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
    
        cy.url().should('include','article')

    }) 

    it('Mark-unMark as favorite', function(){
       // cy.get('.nav-link').contains(QAM1).click()
       cy.get('ul.navbar-nav').children().contains(QAM1).click()
        cy.contains('My Articles').should('be.visible')
      //  cy.get('.ion-heart').click()
       cy.get('.ion-heart').first().click()
       
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        //cy.get('.ion-heart').first().click()
        
        // cy.get('.btn-primary').first().then(($fav)=>{
        //     const favCount = $fav.text()
        //     expect(parseInt(favCount)).to.eq(1)
        // }).click()

        cy.get('.btn-primary').first().then(($fav)=>{
           return $fav.text()   
        }).as($favCount)

        cy.get('@favCount').then(($cnt)=>{
            expected(parseInt($cnt)).to.eq(1)
        })

        cy.get('.btn-primary').first().click()
        
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)
        //cy.go('forward')
        //cy.go(1)

    })
})

