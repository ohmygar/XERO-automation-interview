# This test cases has integrated with Cucumber to facilitates BDD. It will only test feature&features files and ignore .js files
Feature: XERO interview demo test

  # Background steps will be execute for each 'Scenario' under this 'Feature'.
  Background:
    # set the user name and password from fixture json to a global variable
    Given I have a standard user account
    # Automatically grab the user global variable for login
    When I login to Swag Labs as the given user
    # Products has been passed into the step as a parameter. Verify we are at the right page.
    Then I should see "Products" on the page

  # Tags can be used to run tests as a group (eg. run @Smoke and @Sanity, but not @Regression)
  @smoke
  Scenario: Standard user check-out test
    # This step uses Cypress customised function which can be found from support/commands.js
    When I add "sauce-labs-bolt-t-shirt" into the cart
    And I checkout the cart with given user
    When I confirm the cart item from the checkout overview page and click finish button
    Then I should see "THANK YOU FOR YOUR ORDER" on the page