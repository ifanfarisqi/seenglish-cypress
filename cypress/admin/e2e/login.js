describe("Admin is on Login Page", () => {
  it("Successsfully Load", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get('a[href = "/login"]').contains("Login").click({ force: true });

    cy.get('input[type = "email"]').type("admin@seenglish.com");
    cy.get('input[type = "password"]').type("123456");
    cy.get('ins[class="iCheck-helper"]').click();
    cy.get('input[type = "submit"]').contains("Log In").click();

    cy.get('a[class="dropdown-toggle"]').contains("Administratrion").click();
    cy.get('div[class="pull-right"]').click();
  });
});
