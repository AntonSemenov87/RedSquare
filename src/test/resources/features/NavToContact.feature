Feature: Navigation to Contact page

  @smoke
  Scenario: Contact verification page for header
    Given user is on landing page
    When user clicks on Contact button in header
    Then user is taken to Contact page