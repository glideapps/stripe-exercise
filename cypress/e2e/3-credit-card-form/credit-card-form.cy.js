/// <reference types="cypress" />

describe('Credit card form', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('displays the form', () => {
    cy.get('form').should('exist')
  })
})