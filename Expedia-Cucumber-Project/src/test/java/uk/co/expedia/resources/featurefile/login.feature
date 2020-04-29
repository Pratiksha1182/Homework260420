Feature: Login feature

  As a user, I want to login in to expedia.co.uk successfully

  Scenario: User should login successfully with valid credentials
    Given I am on Home page
    When I click on account tab
    And I click on sign in tab
    And I enter Email "pattypratiksha@gmail.com"
    And I enter password "jay1ambe"
    And I click on login button
    Then I should login successfully

  Scenario: User should Not login successfully with invalid credentials
    Given I am on Home page
    When I click on account tab
    And I click on sign in tab
    And I enter valid Email "pratikshapatel1182@gmail.com"
    And I enter invalid password "qwerjjr"
    And I click on login button
    Then I should Not login successfully
