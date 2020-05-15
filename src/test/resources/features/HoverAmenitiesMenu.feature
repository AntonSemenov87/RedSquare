Feature: Verification of pages opening when hover over Amenities menu and click on each

  @smoke1
  Scenario: Verification of pages open when hover over Amenities and click on items
    Given user is on landing page
    When user hovers over on Amenities menu
    And click on Restaurant
    Then Restaurant page opens
    And user navigates to home page
    And user clicks on Sauna
    Then Sauna page opens
    And user navigates to home page
    And user clicks on Spa Services
    Then Spa Services page opens
    And user navigates to home page
    And user clicks on Tanning
    Then Tanning page opens
    And user navigates to home page
    And user clicks on Massage
    Then Massage page opens