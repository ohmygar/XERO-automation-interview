const FIRSTNAME_FIELD = '[data-test="firstName"]';
const LASTNAME_FIELD = '[data-test="lastName"]';
const POSTAL_CODE_FIELD = '[data-test="postalCode"]';
const CONTINUE_BUTTON = '[data-test="continue"]';
const FINISH_BUTTON = '[data-test="finish"]';

export function typeUserInformation(user) {
    cy.get(FIRSTNAME_FIELD).type(user.firstName);
    cy.get(LASTNAME_FIELD).type(user.lastName);
    cy.get(POSTAL_CODE_FIELD).type(user.postalCode);
}

export function getContinueButton() {
    return cy.get(CONTINUE_BUTTON);
}

export function getFinishButton() {
    return cy.get(FINISH_BUTTON);
}