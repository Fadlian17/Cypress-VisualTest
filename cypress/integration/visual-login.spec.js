describe('Visual Regression -Login Page', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get("#signin_button").click()
        cy.get("#user_login").type("masuk")
        cy.get("#user_password").type("masuk123")
        cy.get("#user_remember_me").click()
    })

    it("Visual Test Desktop Layout", () => {
        cy.setResolution([1280,720])
        cy.matchImageSnapshot()
    });

    it("Visual Test Tablet Layout", () => {
        cy.setResolution("ipad-2")
        cy.matchImageSnapshot()
    });

    it("Viusal Test Mobile Layout", () => {
        cy.setResolution("iphone-6")
        cy.matchImageSnapshot()
    });


});