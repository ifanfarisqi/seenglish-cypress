describe("Study is on Register Page", () => {
  it("Successsfully Register", () => {
    cy.visit("/");
    cy.contains("Register").click({ force: true });
    //cy.get('a[href="/register"]').contains("Register").click({ force: true });

    cy.get('input[id = "nama"]').type("Ifan Farisqi");
    cy.get('input[id = "username"]').type("ifan123");
    cy.get('input[id = "email"]').type("oreoonugget@gmail.com");
    cy.get('input[id = "password"]').type("ifan123");
    cy.get('input[id = "no_hp"]').type("082143253");
    cy.get('input[id = "pendidikan"]').type("S1");
    cy.get('select[id = "jk"]').select("Laki-laki").should("have.value", "L");
    cy.get('input[id = "alamat"]').type("Gresik");
    cy.get('input[id = "gambar"]').selectFile(
      "cypress/downloads/pict_siswa.jpg"
    );

    cy.get('input[value = "Daftar"]').contains("Daftar").click();
  });
});
