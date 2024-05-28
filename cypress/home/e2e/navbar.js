describe("User is on Home Page", () => {
  it("Successsfully Load Home", () => {
    cy.visit("/");
    cy.contains("SE English").click();
    cy.contains("Informasi").click();
    cy.get('i[class="ri-arrow-up-line"]').click();
    cy.contains("Tata Cara").click();
    cy.get('i[class="ri-arrow-up-line"]').click();
    cy.contains("Ketentuan").click();
    cy.get('i[class="ri-arrow-up-line"]').click();
    cy.contains("FAQ").click();
    cy.get('i[class="ri-arrow-up-line"]').click();
    cy.contains("Kontak Kami").click();
    cy.get('i[class="ri-arrow-up-line"]').click();
  });
});
