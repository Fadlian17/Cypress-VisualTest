const pages = ["https://example.com/"]
const sizes = ["iphone-6","ipad-2",[1200,800]]


describe('Visual Regression Test', () => {
    sizes.forEach(size=>{
        pages.forEach(page=>{
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            });
        })
    })
});

describe('Visual Single Elements Snapshot', () => {
    it('Shoud match a single element snapshots', () => {
        cy.visit('http://example.com')
        cy.get('h1').matchImageSnapshot({
            failureTreshold:10.0,
            failureTresholdType:"pixels"
        })
    });
});