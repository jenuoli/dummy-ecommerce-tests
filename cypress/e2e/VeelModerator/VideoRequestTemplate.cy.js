describe('Veel Admin After Profile Approval', function(){
  
    it('Admin Profile',function(){
        cy.viewport(1100, 631);
        
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(3000);
        cy.get(':nth-child(9) > [data-testid="ps-menu-button-test-id"]').click();
        cy.wait(1000);
        cy.get('.max-md\\:max-w-screen > .flex-col > :nth-child(2)').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.get("body div main section div h1").click();
        cy.wait(1000);
        cy.xpath("(//img[@alt='edit'])[2]").click();
        cy.get(':nth-child(1) > .inline > :nth-child(1) > .flex').click();
        cy.wait(1000);
       



    });
});