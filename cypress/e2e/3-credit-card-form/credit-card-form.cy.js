/// <reference types="cypress" />

describe('Credit card form', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('displays the form', () => {
    cy.get('form').should('exist')
  })

  it('fills in the credit card number', () => {
    cy.get("input[name='card_number']")
      .type('4444 4444 4444 4444')
  })

  it('fills in the expiration date', () => {
    cy.get("input[name='expiration_date']")
      .type('02 30')
  })

  it('fills in the CV', () => {
    cy.get("input[name='cvc']")
      .type('123')
  })
})