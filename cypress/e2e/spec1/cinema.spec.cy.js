
describe("Should check main page", () => {
  it("should check title", () => {
    cy.visit("qamid.tmweb.ru");
    cy.title().should("eq", "ИдёмВКино");
  });

  it("Should check number of days", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get("a.page-nav__day").should("have.length", 7);
  });

  it("Should check number of films", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get(".movie").should("have.length", 2);
  });

  it("Should be possible to book", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get("a.page-nav__day:nth-of-type(4)").click();
    cy.get(".movie").first().contains("19:00").click();
    const seats = require("../../fixtures/seats.json");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(".acceptin-button").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  })
});


//npx cypress run --record --key be704b43-4850-4759-9151-fbb70aab2263