Feature: Verification of pages opening when hover over Press menu and click on each

  @smoke2
  Scenario: Verification of pages open when hover over Press and click on items
      Given user is on landing page
      When user hovers over on Press menu
      Then click on Digital
      And Digital page opens
      Then user navigates to home page
      And user clicks on Media
      Then Media page opens

