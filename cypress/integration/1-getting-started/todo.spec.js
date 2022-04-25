/// <reference types="cypress" />

describe("react app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays two todo items by default", () => {
    cy.get(".App-link").should("contain", "Learn React");
  });
});
