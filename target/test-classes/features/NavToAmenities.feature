Feature: Navigation to Amenities page

  @smoke
  Scenario: Amenities verification page for header
    Given user is on landing page
    When user clicks on Amenities button in header
    Then user is taken to Amenities page