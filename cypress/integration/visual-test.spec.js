describe('Visual Regression Test', () => {
    
    it('Basic Visual Regression Test', () => {
        cy.visit("http://example.com/")
        cy.matchImageSnapshot()
    });
});