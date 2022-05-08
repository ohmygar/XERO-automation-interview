const CART_LINK = '.shopping_cart_link';
const CART_BADGE = '.shopping_cart_badge';

export function getCartBadge() {
    return cy.get(CART_BADGE);
}

export function getCartLink() {
    return cy.get(CART_LINK, {timeout: 5000});
}

export function checkout(itemName) {
    cy.get(`[data-test="add-to-cart-${itemName}"]`).click()
}