describe('Moderator Login', function(){
    it('Login for moderator',function(){
        cy.viewport(1100, 631);
       
        // Visit the login page
        cy.visit('https://www.dev-moderator.veelapp.com');
   
        //Both Incorrect Email id and Password
        cy.get('[data-testid="Email ID"]').click().type('jenu@12veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123456#');
        cy.wait(1000);
        cy.get('[data-testid="submit-btn"]').click();


// correct Email and Incorrect Password
        cy.wait(3000);
        cy.get('[data-testid="Email ID"]').clear();
        cy.get('[data-testid="Password"]').clear();


        cy.wait(4000);
        cy.get('[data-testid="Email ID"]').click().type('dileep@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('password');
        cy.wait(1000);
        cy.get('[data-testid="submit-btn"]').click();




//Incorrect Email and Correct Password
cy.wait(3000);
cy.get('[data-testid="Email ID"]').clear();
cy.get('[data-testid="Password"]').clear();


cy.wait(4000);
cy.get('[data-testid="Email ID"]').click().type('ram@gmail.com');
cy.get('[data-testid="Password"]').click().type('password');
cy.wait(1000);
cy.get('[data-testid="submit-btn"]').click();


  //Both correct Email and Password
  cy.wait(1000);
        cy.get('[data-testid="Email ID"]').clear();
        cy.get('[data-testid="Password"]').clear();


        cy.wait(4000);
        cy.get('[data-testid="Email ID"]').click().type('jenu@veelapp.com');
        cy.get('[data-testid="Password"]').click().type('Jenu@123#');
        cy.wait(1000);
        cy.get('[data-testid="submit-btn"]').click();

    });
});

