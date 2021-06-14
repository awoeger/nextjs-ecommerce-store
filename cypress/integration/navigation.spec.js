// todo2: fix link to thank you page

describe('Can navigate around pages', () => {
  it('can visit all pages and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="homepage-shop-now-link"]').click();
    cy.get('[data-cy="learn-more-about-product-link"]').first().click();
    cy.get('[data-cy="single-product-page-add-to-cart-link"]').click();
    cy.get('[data-cy="single-product-page-proceed-to-shopping-cart"]').click();
    cy.get('[data-cy="checkout-link"]').click();
    cy.get('[data-cy="checkout-form-firstName"]')
      .click({ force: true })
      .type('Karl');
    cy.get('[data-cy="checkout-form-lastName"]')
      .click({ force: true })
      .type('Karlson');
    cy.get('[data-cy="checkout-form-email"]')
      .click({ force: true })
      .type('karl@karlson.com');
    cy.get('[data-cy="checkout-form-city"]')
      .click({ force: true })
      .type('Vienna');
    cy.get('[data-cy="checkout-form-postalCode"]')
      .click({ force: true })
      .type('1020');
    cy.get('[data-cy="checkout-form-country"]')
      .click({ force: true })
      .type('Austria');
    cy.get('[data-cy="checkout-form-nameOnCreditCard"]')
      .click({ force: true })
      .type('Karl Karlson');
    cy.get('[data-cy="checkout-form-cardNumber"]')
      .click({ force: true })
      .type('5555 4444 3333 2222');
    cy.get('[data-cy="checkout-form-cvvNumber"]')
      .click({ force: true })
      .type('222');
    cy.get('[data-cy="checkout-form-expirationDate"]')
      .click({ force: true })
      .type('2034-11');
    cy.get('[data-cy="checkout-form-submit"]').click();
  });
});
