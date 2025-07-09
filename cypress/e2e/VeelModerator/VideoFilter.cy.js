describe('Veel Admin After Profile Approval', function(){
  
    it('Admin Profile',function(){
        cy.viewport(1100, 631);
        
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.get('[data-testid="submit-btn"]').click();
        cy.wait(3000);
        cy.get("body > div:nth-child(1) > main:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").click();
        cy.wait(2000);
        cy.get('[title="Capture"] > .cursor-pointer').click();
        cy.wait(4000);
        cy.get("div:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)").click();
        cy.wait(2000);
        cy.get("div:nth-child(3) div:nth-child(1) div:nth-child(1) p:nth-child(1)").click();
        cy.wait(9000);
        
    });
});

