Feature: Practice functionality
  As a user I want to use functions of practice page in letskodit
  Scenario: User should navigate to practice page successfully
    Given I am on home page
    When I click on practice link
    Then I should navigate to practice page successfully

  Scenario: User should be able to use functions on practice page
    Given I am on home page
    When I click on practice link
    And I click on honda radio button
    And I click on select cars and select "Honda"
    And I click on peach option
    Then I click on honda check box