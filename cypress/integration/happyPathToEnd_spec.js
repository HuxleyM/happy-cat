describe("happy path to end", () => {
    before(() => {
        cy.visit("/");
        cy.waitForReact();
      });
  
        it('can successfully get to the next page of the form from details to preference', ()=>{
          cy.contains('Dogs allowed').should('not.exist')
          cy.get('input[name="userName"]').type('humanPerson')
          cy.get('input[name="email"]').type('person@gmail.com')
          cy.get('input[name="emailRetype"]').type('person@gmail.com')
          cy.get('input[name="password"]').type('person1!')
          cy.get('input[name="passwordRetype"]').type('person1!')
          cy.get("button").click()
          cy.contains('Dogs allowed').should('exist')
        })

        it('can successfully get to the next page of the form from preference to confirm', ()=>{
            cy.contains('Dogs allowed').should('exist')
            cy.get('select').select('Often')
            cy.get('input[name="gifRate"]').type(3)
            cy.get("button").click()
            cy.contains('Dogs allowed').should('not.exist')
            cy.contains('Confirm').should('exist')
          })

        it('once at confirm clicking confirm completes the signup', ()=>{
            cy.contains('Purrrfect!').should('not.exist')
            cy.contains('Purrrfect!').should('not.exist')
            cy.get("button").click()
            cy.contains('Dogs allowed').should('not.exist')
            cy.contains('Purrrfect!').should('exist')
        })
  });
  