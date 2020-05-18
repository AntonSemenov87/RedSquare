Feature: Navigation to Twitter page

  @smoke
  Scenario: Twitter verification page for header
    Given user is on landing page
    When user clicks on Twitter button in header
    Then user is taken to Twitter page