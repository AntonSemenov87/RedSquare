Feature: Navigation to Instagram page

  @smoke
  Scenario: Instagram verification page for header
    Given user is on landing page
    When user clicks on Instagram button in header
    Then user is taken to Instagram page