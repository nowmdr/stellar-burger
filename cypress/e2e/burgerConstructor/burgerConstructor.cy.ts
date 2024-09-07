const localUrl = 'http://localhost:4000/';
const constructorMain = '[data-cy="constructorMain"]';
const dataMains = '[data-cy="mains"]';
const constructorBun = '[data-cy="constructorBun"]';
const dataBuns = '[data-cy="buns"]';
const dataSauces = '[data-cy="sauces"]';

describe('Интеграционные тесты для страницы конструктора бургера', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });

    cy.visit(localUrl);
  });

  it('Добавление ингредиентов в конструктор', () => {
    // Добавление булки
    cy.get(dataBuns).contains('Добавить').click();
    cy.get(constructorBun).should('contain', 'Краторная булка N-200i');

    // Добавление начинки
    cy.get(dataMains).contains('Добавить').click();
    cy.get(constructorMain).should(
      'contain',
      'Биокотлета из марсианской Магнолии'
    );

    // Добавление соуса
    cy.get(dataSauces).contains('Добавить').click();
    cy.get(constructorMain).should('contain', 'Соус Spicy-X');
  });
});
