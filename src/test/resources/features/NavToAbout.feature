Feature: Navigation to About page

  @smoke
  Scenario: About verification page for header and footer
    Given user is on landing page
    When user clicks on About button in header
    Then user is taken to About page
    When user return to landing page
    And user clicks on About button in footer
    Then user is taken to About page again