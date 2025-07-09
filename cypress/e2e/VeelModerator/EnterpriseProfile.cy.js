describe('Enterprise Profile After Login', function(){
    it('Enterprise Profile',function(){
        cy.viewport(1100, 631);
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(1000);


        //Enterprise Profile
        cy.get(':nth-child(3) > [data-testid="ps-menu-button-test-id"]').click();
        cy.wait(2000);
        cy.get('[data-testid="search_input"]').click().type('Veel');
        cy.wait(2000); // Wait for 2 seconds
        cy.log('Attempting to find the view button');


        //View Enterprise Detail
        cy.contains('View').click();
        cy.wait(2000);
        cy.contains('Edit').click();
         //Edit Enterprise Name
        cy.get('[data-testid="Enterprise Name"]').clear();
        cy.wait(2000);
        cy.get('[data-testid="Enterprise Name"]').click().type('Product of Veel');
         
        //Select Enterprise Name
        cy.get('[data-testid="saveChangeBtn"]').click();


    });
});
