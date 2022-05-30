/// <reference types="Cypress" />
import spok from "cy-spok";

describe("GET /users/:userID integration tests", () => {
  it("Testing...", () => {
    const userID = 2;
    const responseTimeLimit = 1000;

    cy.getUser(userID).then((response) => {
      // Validate JSON Schema
      cy.wrap(response.body).should(
        spok({
          data: {
            id: spok.number,
            email: spok.string,
            first_name: spok.string,
            last_name: spok.string,
            avatar: spok.string,
          },
          support: {
            url: spok.string,
            text: spok.string,
          },
        })
      );

      // Status code is 200
      expect(response.status).to.eql(200);
      // Validate field values
      expect(response.body.data.id).to.eql(userID);
      expect(response.body.data.email).to.eql("janet.weaver@reqres.in");
      expect(response.body.data.first_name).to.eql("Janet");
      expect(response.body.data.last_name).to.eql("Weaver");
      expect(response.body.data.avatar).to.eql(
        "https://reqres.in/img/faces/2-image.jpg"
      );
      // Response time less than 1000 ms
      expect(response.duration).to.not.be.greaterThan(responseTimeLimit);
    });
  });
});
