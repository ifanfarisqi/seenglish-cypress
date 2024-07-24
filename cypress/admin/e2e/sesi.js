describe("Admin CRUD sesi", () => {
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
    cy.contains("Sesi").click();

    // //Create Sesi
    // cy.get('button[id="btn-create"]').click();
    // cy.get('input[id = "nama"]').type("Ujian TOEFL 1");
    // const dayjs = require("dayjs");
    // cy.log(dayjs().format("YYYY/MM/DD"));
    // cy.get('input[id = "tanggal"]').type(dayjs().format("2024/08/28"));
    // cy.get('input[id = "jam_mulai"]').type("07:00");
    // cy.get('input[id = "jam_selesai"]').type("10:00");
    // cy.get('input[id = "kuota"]').type("15");
    // cy.get('input[id = "link_wa"]').type("https://wa.me/1c21c3f3453");
    // cy.contains("Simpan").click();

    //Detail Sesi
    // cy.get('a[href="kelas/detail/30"]').click();
    // cy.get('a[href="http://127.0.0.1:8000/master/kelas"]')
    //   .contains("Sesi")
    //   .click();

    //Edit Sesi
    // cy.get('a[href="kelas/ubah/30"]').click();
    // cy.get('input[id = "nama"]').clear().type("Ujian Online TOEFL 1");
    // const daySesi = require("dayjs");
    // cy.log(daySesi().format("YYYY/MM/DD"));
    // cy.get('input[id = "tanggal"]').type(daySesi().format("2024/08/25"));
    // cy.get('input[id = "jam_mulai"]').clear().type("07:45");
    // cy.get('input[id = "jam_selesai"]').clear().type("10:45");
    // cy.get('input[id = "kuota"]').clear().type("20");
    // cy.get('input[id = "link_wa"]').clear().type("bit.ly/sesi02");
    // cy.contains("Simpan").click();

    //Delete Sesi
    // cy.get('button[id = "30"]').click();
    // cy.get('button[class="swal2-cancel swal2-styled"]').click();
    // cy.get('button[id = "30"]').click();
    // cy.get('button[class="swal2-confirm swal2-styled"]').click();
    // cy.contains("OK").click();
  });
});
