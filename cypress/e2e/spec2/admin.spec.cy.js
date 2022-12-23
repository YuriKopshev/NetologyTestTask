const goodAdmin = require("../../fixtures/happy_admin.json");
const wrongAdmin = require("../../fixtures/wrong_admin.json");

describe("Shold check admin login",  { defaultCommandTimeout: 6000 }, () => {
    it("Check success admin login", () => {
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.get('[type="email"]').type(goodAdmin.login);
      cy.get(('[for="pwd"]')).type(goodAdmin.password);
      cy.get('[type="submit"]').click();
      cy.get(".conf-step__title").should('contain.text','Управление залами');
    });
  
    it("Check wrong admin login ", () => {
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.login(wrongAdmin.login, wrongAdmin.password);
      cy.get("body").should("contain.text", "Ошибка авторизации!");
    });
  });