const localUrl = 'http://localhost:4000/';
const constructorMain = '[data-cy="constructorMain"]';
const dataMains = '[data-cy="mains"]';
const constructorBun = '[data-cy="constructorBun"]';
const dataBuns = '[data-cy="buns"]';
const dataSauces = '[data-cy="sauces"]';

const bunTitle = 'Краторная булка N-200i';
const modalTitle = 'Детали ингредиента';
const dataModalButtonClose = '[data-cy="modalButtonClose"]';
const dataModalOverlay = '[data-cy="modalOverlay"]';
const dataButtonCreateOrder = '[data-cy="buttonCreateOrder"]';
const orderNumber = '911';

describe('Интеграционные тесты для страницы конструктора бургера', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('POST', '/api/orders', { fixture: 'order.json' }).as(
      'createOrder'
    );
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' }).as(
      'getUser'
    );
    cy.setCookie('accessToken', 'testAccessToken');
    localStorage.setItem('refreshToken', 'testRefreshToken');
    cy.visit(localUrl);
  });
  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
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

  it('Работа модальных окон', () => {
    // Открытие модального окна ингредиента
    cy.contains(bunTitle).click();
    cy.contains(modalTitle).should('exist');

    // Закрытие модального окна по клику на крестик
    cy.get(dataModalButtonClose).click();
    cy.contains(modalTitle).should('not.exist');

    // Открытие модального окна снова
    cy.contains(bunTitle).click();
    cy.contains(modalTitle).should('exist');

    // Закрытие модального окна по клику на оверлей
    cy.get(dataModalOverlay).click({ force: true });
    cy.contains(modalTitle).should('not.exist');
  });

  it('Создание заказа', () => {
    // Добавление ингредиентов
    cy.get(dataBuns).contains('Добавить').click();
    cy.get(dataMains).contains('Добавить').click();
    cy.get(dataSauces).contains('Добавить').click();

    // Оформление заказа
    cy.get(dataButtonCreateOrder).click();
    cy.contains(orderNumber).should('exist');

    // Закрытие модального окна
    cy.get(dataModalButtonClose).click();
    cy.contains(orderNumber).should('not.exist');

    // Проверка, что конструктор пуст
    cy.get(constructorBun).should('not.contain', 'Краторная булка N-200i');
    cy.get(constructorMain).should(
      'not.contain',
      'Биокотлета из марсианской Магнолии'
    );
    cy.get(constructorMain).should('not.contain', 'Соус Spicy-X');
  });
});
