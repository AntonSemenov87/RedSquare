Feature: Navigation to Gallery page

  @smoke
  Scenario: Gallery verification page for header
    Given user is on landing page
    When user clicks on Gallery button in header
    Then user is taken to Gallery page