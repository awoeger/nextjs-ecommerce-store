describe('Ability to add, substract and remove products from cart', () => {
  it('Can load all content', () => {
    cy.visit('/products');
    cy.get('[data-cy="learn-more-about-product-link"]').first().click();
    cy.get('[data-cy="single-product-page-add-to-cart-link"]').click();
    cy.get('[data-cy="cart-counter-header"]').should('have.text', 1);
    cy.get('[data-cy="single-product-page-add-to-cart-link"]').click();
    cy.get('[data-cy="cart-counter-header"]').should('have.text', 2);
    cy.get('[data-cy="single-product-page-proceed-to-shopping-cart"]').click();
    cy.get('[data-cy="products-in-cart-div"]').should('be.visible');
    cy.get('[data-cy="substract-quantity-button"]').click();
    cy.get('[data-cy="cart-counter-header"]').should('have.text', 1);
    cy.get('[data-cy="cart-counter-shoppingcart"]').should(
      'have.text',
      'Total amount of products: 1',
    );
    cy.get('[data-cy="add-quantity-button"]', {
      withinSubject: null,
      timeout: 6000,
    }).click();
    cy.get('[data-cy="cart-counter-header"]').should('have.text', 2);
    cy.get('[data-cy="cart-counter-shoppingcart"]').should(
      'have.text',
      'Total amount of products: 2',
    );
    cy.get('[data-cy="remove-quantity-button"]').click();
    cy.get('[data-cy="no-items-in-cart-div"]').should('be.visible');
  });
});
