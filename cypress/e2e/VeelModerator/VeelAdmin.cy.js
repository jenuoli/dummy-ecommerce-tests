describe('Veel Admin After Profile Approval', function(){
    it('Admin Profile',function(){
        cy.viewport(1100, 631);
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(3000);


        //Veel Admin
        cy.get(':nth-child(5) > [data-testid="ps-menu-button-test-id"]').click();
        cy.wait(1000);
        //search bar
        cy.get('[data-testid="search_input"]').type('Test');
        cy.wait(1000);


        //Edit User
        cy.contains('Edit').click();
        cy.wait(1000);
        //Clearing Input data to update new data
        cy.get('[data-testid="Full Name"]').clear();
        cy.get('[data-testid="Email"]').clear();
        cy.get('[data-testid="Phone Number"]').clear();
       
        cy.wait(2000);




        // New data Input
        cy.get('[data-testid="Full Name"]').type('Jenu Oli');
        cy.wait(1000);
        cy.get('[data-testid="Email"]').type('12345');
        cy.wait(1000);
        cy.get('[data-testid="Phone Number"]').type('0000000000');
        cy.wait(1000);
       
        cy.get('[data-testid="submit"]').click();


//Delete User


        cy.contains('Delete').click();




    });
});
