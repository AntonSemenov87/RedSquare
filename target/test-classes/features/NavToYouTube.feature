Feature: Navigation to YouTube page

  @smoke
  Scenario: YouTube verification page for header
    Given user is on landing page
    When user clicks on YouTube button in header
    Then user is taken to YouTube page