const CHECKOUT_BUTTON = '[data-test="checkout"]';

export function getCheckoutButton() {
    return cy.get(CHECKOUT_BUTTON);
}
