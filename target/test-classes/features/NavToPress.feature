Feature: Navigation to Press page

  @smoke
  Scenario: Press verification page for header
    Given user is on landing page
    When user clicks on Press button in header
    Then user is taken to Press page