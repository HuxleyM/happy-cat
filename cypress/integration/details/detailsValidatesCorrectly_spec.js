describe("it renders details form", () => {
    before(() => {
      cy.visit("/");
      cy.waitForReact();
    });
    beforeEach(() => {
        cy.get('input[name="userName"]').clear();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="emailRetype"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('input[name="passwordRetype"]').clear();
      });
    
      describe("input validation", () => {
        it("Should have all fields", () => {
          cy.get('input[name="userName"]');
          cy.get('input[name="email"]');
          cy.get('input[name="emailRetype"]');
          cy.get('input[name="password"]');
          cy.get('input[name="passwordRetype"]');
        });
    
        it("Should show error if incorrect email used and disappear if correct email used", () => {
          cy.get('input[name="email"]').type("Not a real email dummy");
          cy.contains("This is not a valid email.");
          cy.get('input[name="email"]').clear();
          cy.get('input[name="email"]').type("iLove@cypress.com");
          cy.contains("This is not a valid email.").should("not.exist");
        });
    
        it("Should show error if emails dont match used and disappear if emails match used", () => {
          cy.get('input[name="email"]').type("iLove@cypress.com");
          cy.get('input[name="emailRetype"]').type("enzymeWouldntWork");
          cy.contains("Emails do not match.");
          cy.get('input[name="emailRetype"]').clear();
          cy.get('input[name="emailRetype"]').type("iLove@cypress.com");
          cy.contains("Emails do not match.").should("not.exist");
        });
    });
});
