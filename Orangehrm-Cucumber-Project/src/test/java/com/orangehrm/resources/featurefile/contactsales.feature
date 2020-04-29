Feature: Contact Sales functionality
  As a user I want to submit contact details in orangehrm
  Scenario: User should submit contact details successfully
    Given I am on home page
    When I click on contact sales button
    Then I should navigate to contact sales page

  Scenario: User should submit contact details successfully
    Given I am on home page
    When I click on contact sales button
    And I enter first name "Pratiksha"
    And I enter last name "Patel"
    And I enter company name "PBS Limited"
    And I select number employees "101 - 150"
    And I enter phone number "07495172051"
    And I enter job title "Tester"
    And I enter "patty_appu@yahoo.co.uk"
    And I select country name "United Kingdom"
    Then I enter comment "None"

