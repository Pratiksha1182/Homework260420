Feature: Accessibility functionality
  As a user I want to access accessibility page of Wcht website
  Scenario: User should access accessibility page
    Given I am on home page
    When I click on close tab of customer information
    And I click on accessibility link
    Then I should navigate to accessibility page successfully

    Scenario: User should navigate to get involved page
      Given I am on home page
      When I click on close tab of customer information
      And I click on accessibility link
      And I mouse hover on your community tab
      Then I mouse hover on get involved and click

