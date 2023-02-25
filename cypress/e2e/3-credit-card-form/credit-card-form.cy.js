/// <reference types="cypress" />

describe('Credit card form', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('fills in the credit card form', () => {
    cy.get('form.credit-card').should('exist')

    cy.get("input[name='card_number']")
      .type('4444 4444 4444 4444')

    cy.get("input[name='expiration_date']")
      .type('02 30')

    cy.get("input[name='cvc']")
      .type('123')
  })

  it('submits the form', () => {
    cy.get("input[name='card_number']")
      .type('4444 4444 4444 4444')

    cy.get("input[name='expiration_date']")
      .type('02 30')

    cy.get("input[name='cvc']")
      .type('123')

    cy.intercept('POST', 'https://api.stripe.com/v1/subscriptions', { fixture: 'subscription' })
    cy.get('form.credit-card').submit()
  })
})
