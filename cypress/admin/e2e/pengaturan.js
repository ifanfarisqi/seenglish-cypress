describe("Edit Setting Admin", () => {
  it("Successfully Edit", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get('a[href = "/login"]').contains("Login").click({ force: true });

    cy.get('input[type = "email"]').type("admin@seenglish.com");
    cy.get('input[type = "password"]').type("123456");
    cy.get('input[type = "submit"]').contains("Log In").click();

    cy.get('a[class="dropdown-toggle"]').contains("Administratrion").click();
    cy.get('div[class="pull-left"]').click();

    cy.get('input[type="radio"]').check("P");
    // cy.contains("Drop files here to upload")
    //   .click()
    //   .selectFile("cypress/downloads/pict_edit_siswa.png", {
    //     action: "drag-drop",
    //   });
    cy.get('button[id = "update_profil"]').contains("Update").click();

    cy.contains("Logout").click();
  });
});
