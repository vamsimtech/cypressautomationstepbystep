describe('MyTestSuite', function(){
   
    it('Table Test', ()=>{

        cy.visit('http://testautomationpractice.blogspot.com/')
        
        cy.get('table[name="BookTable"]').contains('Learn Selenium').should('be.visible')

        cy.get('table[name="BookTable"]> tbody > tr td:nth-child(2)').each(($e,index,$list)=>{

            if($e.text().includes('Amit')){
                
                cy.get('table[name="BookTable"]> tbody > tr td:nth-child(1)').eq(index).then(function(bname){
                    let bookname=bname.text()
                    
                    expect(bname.text()).to.includes('Master In JS')
                })
            }

        })

    })

})