describe('Enterprise Profile After Login', function(){
    it('Enterprise Profile',function(){
        cy.viewport(1100, 631);
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(1000);


        cy.get(':nth-child(6) > [data-testid="ps-menu-button-test-id"]').click();
        cy.scrollTo('bottom', { duration: 5000 });


        //Add Header
        cy.wait(1000);
        cy.get('[data-testid="add_header_btn"]').click().type('Add Another Header Of Veel');
        cywait(1000);
        cy.get('[data-testid="sendBtn"]').click();


    });
});
