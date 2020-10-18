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
  describe("disabled button", () => {
    it("should be disabled on arrival", () => {
      cy.get("button").should("be.disabled");
    });

    it("if all fields are filled and no errors button should be enabled", () => {
      cy.get('input[name="userName"]').type("cypressBoi");
      cy.get('input[name="email"]').type("itsoGreat@gmail.com");
      cy.get('input[name="emailRetype"]').type("itsoGreat@gmail.com");
      cy.get('input[name="password"]').type("useitn0w!");
      cy.get('input[name="passwordRetype"]').type("useitn0w!");
      cy.get("button").should("not.be.disabled");
    });

    it("if all filed are filled and there is an errors button should be disabled", () => {
      cy.get('input[name="userName"]').type("cypressBoi");
      cy.get('input[name="email"]').type("itsoGreat@gmail.com");
      cy.get('input[name="emailRetype"]').type("itsoGreat@gmail.com");
      cy.get('input[name="password"]').type("useitn0w!");
      cy.get('input[name="passwordRetype"]').type("useitn0w!NOW");
      cy.get("button").should("be.disabled");
    });
  });

});
