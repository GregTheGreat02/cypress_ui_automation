describe('Katalon application', () =>{

it("Home Page", () =>{

cy.visit('https://katalon-demo-cura.herokuapp.com/');
cy.get('#btn-make-appointment').click();
cy.get('#txt-username').type('John Doe');
cy.get('#txt-password').type('ThisIsNotAPassword');
cy.get('#btn-login').click();
cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
cy.get('#chk_hospotal_readmission').click();
cy.get('#radio_program_medicare').click();
cy.get('#txt_visit_date').type('04/05/2024');
cy.get('#txt_comment');
cy.get('#btn-book-appointment').click();
})


}) 