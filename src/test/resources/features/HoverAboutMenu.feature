Feature: Verification of pages opening when hover over About menu and click on each

  @smoke
  Scenario: Verification of pages open when hover over About and click on items
      Given user is on landing page
      When user hovers over on About menu
      And click on FAQ
      Then FAQ page opens
      And user navigates to home page
      And user clicks on Testimonials
      Then Testimonials page opens
      And user navigates to home page
      And user clicks on WallOfFame
      Then WallOfFame page opens
