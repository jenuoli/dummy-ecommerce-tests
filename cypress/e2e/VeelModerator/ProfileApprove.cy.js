describe('Profile Approval after Enterprise Profile', function(){
    it('Profile Approval',function(){
        cy.viewport(1100, 631);
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(1000);


        //All Creators
        cy.get(':nth-child(4) > [data-testid="ps-menu-button-test-id"]').click();
        cy.wait(2000);
        cy.get('[data-testid="search_input"]').click().type('Test');
        cy.wait(3000);
        cy.get(':nth-child(1) > a > .p-\\[16px\\]').click();
       
    });
});
