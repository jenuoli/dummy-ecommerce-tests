describe('Ecommerce Dummy Website', function(){
    it('Dummy Website',function(){
        cy.viewport(1100, 631);
       
        // signup to ecommerce dummy website
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.wait(1000);
        cy.get('[data-qa="signup-name"]').click().type('Jenu');

        cy.get('[data-qa="signup-email"]').click().type('hamp@mailinator.com');

        //After signup entering data
        cy.wait(2000);
        cy.get('[data-qa="signup-button"]').click();
        cy.wait(3000);
        cy.get('#id_gender2').check();

        //password
        cy.get('[data-qa="password"]').click().type('Test@123');
        cy.wait(1000);

        //selecting date, day and Year
        cy.get('[data-qa="days"]').select('18');
        cy.wait(1000);
        cy.get('[data-qa="months"]').select('April');
        cy.wait(1000);
        cy.get('[data-qa="years"]').select('2000');
        cy.wait(1000);

        cy.get('#newsletter').check();

//Address Information
        cy.get('[data-qa="first_name"]').click().type('Jenu');
        cy.wait(1000);
        cy.get('[data-qa="last_name"]').click().type('Oli');
        cy.wait(1000);
        cy.get('[data-qa="company"]').click().type('IT Office');
        cy.wait(1000);
        cy.scrollTo(0, 1000); 
        cy.get('[data-qa="address"]').click().type('Nepal');
        cy.wait(1000);
        cy.get('[data-qa="country"]').select('Canada');
        cy.wait(1000);
        cy.get('[data-qa="state"]').click().type('Ontario');
        cy.wait(1000);
        cy.get('[data-qa="city"]').click().type('Toronto');
        cy.wait(1000);
        cy.get('[data-qa="zipcode"]').click().type('M5V 3L9');
        cy.wait(1000);
        cy.get('[data-qa="mobile_number"]').click().type('0000000000');
        cy.wait(2000);
        cy.get('[data-qa="create-account"]').click();
        cy.wait(1000);
        cy.get('[data-qa="continue-button"]').click();



    });
});