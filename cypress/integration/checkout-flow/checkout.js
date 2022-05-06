import {And, When} from "cypress-cucumber-preprocessor/steps";
import * as yourCartPage from "../../support/pageObjects/yourCartPage";
import * as productPage from "../../support/pageObjects/productPage";
import * as checkoutPages from "../../support/pageObjects/checkoutPages";

When('I add {string} into the cart', (itemName) => {
    cy.addToCart(itemName);
})

And('I checkout the cart with given user\'s information', () => {
    productPage.getCartLink().click();
    yourCartPage.getCheckoutButton().click();

    // type user's information(firstname,password and postal code)
    cy.get('@user')
        .then((user) => {
            checkoutPages.typeUserInformation(user);
        });

    checkoutPages.getContinueButton().click();

})

When('I confirm the cart item from the checkout overview page', () => {
    cy.get('.title').should('have.text','Checkout: Overview');
    checkoutPages.getFinishButton().click();
})
