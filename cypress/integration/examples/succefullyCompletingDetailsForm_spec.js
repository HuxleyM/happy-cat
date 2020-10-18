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

      it('can successfully get to the next page of the form', ()=>{
        cy.contains('Dogs allowed').should('not.exist')
        cy.get('input[name="userName"]').type('humanPerson')
        cy.get('input[name="email"]').type('person@gmail.com')
        cy.get('input[name="emailRetype"]').type('person@gmail.com')
        cy.get('input[name="password"]').type('person1!')
        cy.get('input[name="passwordRetype"]').type('person1!')
        cy.get("button").click()
        cy.contains('Dogs allowed').should('exist')
      })
    })