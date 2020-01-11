
describe('Hooks', function() {
    before(function() {
      // runs once before all tests in the block
      cy.log('*************** This is SETUP block *****************')
    })
  
    after(function() {
      // runs once after all tests in the block
      cy.log('*************** This is TEARDOWN block *****************')
    })
  
    beforeEach(function() {
      // runs before each test in the block
      cy.log('*************** This is LOGIN block *****************')
    })
  
    afterEach(function() {
      // runs after each test in the block
      cy.log('*************** This is LOGOUT block *****************')
    })
  })
    