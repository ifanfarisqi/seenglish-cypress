describe("Study is on Login Pag", () => {
  it("Successsfully Load", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get('a[href = "/login"]').contains("Login").click({ force: true });

    cy.get('input[type = "email"]').type("oreoonugget@gmail.com");
    cy.get('input[type = "password"]').type("ifan123");
    cy.get('ins[class="iCheck-helper"]').click();
    cy.get('input[type = "submit"]').contains("Log In").click();

    cy.get('a[class="dropdown-toggle"]').contains("Ifan Farisqi").click();
    cy.get('div[class="pull-right"]').click();
  });
});
