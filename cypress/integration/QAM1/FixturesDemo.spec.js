
describe('Name of the group', function() {

    before(function(){
        cy.fixture('example1').then(function(data){
            // "this" represents the current class and can be accessed outside of block
            this.data= data
        })


    })
    it('mytest',function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type(this.data.email)
        cy.get('input[name=Password]').type(this.data.pwd)
        cy.get('input[type=submit]').click()


    })
});
    