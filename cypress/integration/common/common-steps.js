import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import * as loginPage from "../../support/pageObjects/loginPage";

const URL = 'https://www.saucedemo.com'

Given('I have a standard user account', () => {
    cy.fixture('standard-user.json').as('user');
})


When('I login to Swag Labs as the given user', () => {
    cy.visit(URL);
    cy.get('@user')
        .then((user) => {
            loginPage.login(user);
        });
})

Then(`I should see {string} on the page`, (text) => {
    cy.contains(text).should('exist');
})