
describe('MyTestSuite', function() {
    
    it('Table Test', function() {
        cy.visit('http://testautomationpractice.blogspot.com/')
       
       
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
        
      //  #HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        // #HTML1 > div.widget-content > table > tbody>tr td:nth-child(2)
        //table[name=BookTable]>tbody>tr td:nth-child(2)

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
            const text=$e.text()
            if(text.includes('Amod')){
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
                    const bookname =bname.text()
                    expect(bookname).to.equal('Master In Java')
                })
            }
        });
        
    });
});
