describe("passwordVisibility", () => {
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

  it("toggling password visibility", () => {
    cy.get('input[name="password"]').type("secretShussh");
    cy.contains("secretShussh").should("not.exist");
    cy.get(".fa-eye-slash").click();
    cy.get('input[name="password"]').should("have.value", "secretShussh");
  });
});
