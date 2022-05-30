/// <reference types="@bahmutov/cy-api" />

Cypress.Commands.add("getUser", (userID) => {
  cy.api({
    failOnStatusCode: false,
    method: "GET",
    url: `/users/${userID}`,
  });
});
