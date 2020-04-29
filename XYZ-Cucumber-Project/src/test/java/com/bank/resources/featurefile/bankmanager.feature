Feature: Bank manager feature
  As a user I want to check bank manager functionality on xyz bank website

  Scenario: Bank manager should add customer successfully
    Given I am on home page
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter first name "Pratiksha"
    And I enter last name "Patel"
    And I enter post code "AL10 8PW"
    And I click on add customer button
    Then I should see customer added successfully message

  Scenario: Bank manager should delete customer successfully
    Given I am on home page
    When I click on bank manager login tab
    And I click on customers tab
    And I search customer by name "Pratiksha Patel"
    Then I click on delete button
