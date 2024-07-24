describe("Admin CRUD informasi", () => {
  it("Successfully CRUD", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get('a[href = "/login"]').contains("Login").click({ force: true });

    cy.get('input[type = "email"]').type("admin@seenglish.com");
    cy.get('input[type = "password"]').type("123456");
    cy.get('ins[class="iCheck-helper"]').click();
    cy.get('input[type = "submit"]').contains("Log In").click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.contains("Master Data").click();
    cy.contains("Informasi").click();

    // //Create Informasi
    // cy.get('button[id="btn-create"]').click();
    // cy.get('input[id = "judul"]').type("Informasi 1");
    // cy.get('textarea[name = "isi"]').type("Test 1 2 3 Dicoba");
    // cy.get('input[id = "gambar"]').selectFile(
    //   "cypress/downloads/pict_informasi_1.jpeg"
    // );
    // cy.get('input[id = "a"]').click().should("have.value", "A");
    // cy.contains("Simpan").click();

    //Edit Informasi
    // cy.contains("Ubah").click();
    // cy.get('input[id = "judul"]').clear().type("Informasi 01");
    // cy.get('textarea[name = "isi"]').clear().type("Test 1 2 3 4 5 6 Dicoba");
    // cy.get('input[id = "gambar"]').selectFile(
    //   "cypress/downloads/pict_informasi_1.jpeg"
    // );
    // cy.get('input[id = "a"]').click().should("have.value", "A");
    // cy.contains("Simpan").click();

    //Detail Informasi
    // cy.contains("Detail").click();
    // cy.contains("Kembali").click();

    //Delete Informasi
    // cy.get('button[id = "46"]').click();
    // cy.get('button[class="swal2-cancel swal2-styled"]').click();
    // cy.get('button[id = "46"]').click();
    // cy.get('button[class="swal2-confirm swal2-styled"]').click();
    // cy.contains("OK").click();
  });
});
