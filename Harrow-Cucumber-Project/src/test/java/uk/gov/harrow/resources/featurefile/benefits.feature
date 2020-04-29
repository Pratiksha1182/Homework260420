Feature: Benefits functionality
  As a user I want to apply for housing benefits
Scenario: User should be able to navigate to benefits page
  Given I am on home page
  When I click on service button
  And I mouse hover on benefits and click
  Then I am on benefits page

  Scenario: User should be able to apply for housing benefits
    Given I am on home page
    When I click on service button
    And I mouse hover on benefits and click
    And I click on apply for housing benefits
    And I click on entitlement calculator button
    And I click on start button
    And I click on mortgage or owned outright
    And I enter postcode "AL10 8PW"
    Then I click on next button


