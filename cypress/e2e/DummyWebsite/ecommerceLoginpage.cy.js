describe('Ecommerce Dummy Website', function(){
    it('Dummy Website',function(){
        cy.viewport(1100, 631);
       
        // signup to ecommerce dummy website
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').click().type('hamp@mailinator.com');
        cy.get('[data-qa="login-password"]').click().type('Test@123');
        cy.wait(1000);
        cy.get('[data-qa="login-button"]').click();
    });
});