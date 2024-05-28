describe("Edit Setting Study", () => {
  it("Successfully Edit", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get('a[href = "/login"]').contains("Login").click({ force: true });

    cy.get('input[type = "email"]').type("oreoonugget@gmail.com");
    cy.get('input[type = "password"]').type("ifan123");
    cy.get('input[type = "submit"]').contains("Log In").click();

    cy.contains("Pengaturan").click();

    cy.get('input[type="radio"]').check("L");
    cy.contains("Drop files here to upload")
      .click()
      .selectFile("cypress/downloads/pict_edit_siswa.png", {
        action: "drag-drop",
      });
    cy.get('button[id = "update_profil"]').contains("Update").click();

    cy.contains("Logout").click();
  });
});
