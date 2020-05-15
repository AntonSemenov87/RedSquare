Feature: Navigation to Promotions page

  @smoke
  Scenario: Promotions verification page for header
    Given user is on landing page
    When user clicks on Promotions button in header
    Then user is taken to Promotions page