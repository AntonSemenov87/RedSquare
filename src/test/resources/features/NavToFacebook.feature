Feature: Navigation to facebook page

  @smoke
  Scenario: Facebook verification page for header
    Given user is on landing page
    When user clicks on Facebook button in header
    Then user is taken to Facebook page