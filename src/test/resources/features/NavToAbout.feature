Feature: Navigation to About page

  @smoke
  Scenario: About verification page for header
    Given user is on landing page
    When user clicks on About button in header
    Then user is taken to About page