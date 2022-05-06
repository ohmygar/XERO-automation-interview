const USERNAME_FIELD = '[data-test="username"]';
const PASSWORD_FIELD = '[data-test="password"]';
const LOGIN_BUTTON = '[data-test="login-button"]';


export function login(user) {
    cy.get(USERNAME_FIELD).type(user.username);
    cy.get(PASSWORD_FIELD).type(user.password);
    cy.get(LOGIN_BUTTON).click();
}