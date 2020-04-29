Feature: Login feature
  As a user I want to login into nope commerce website

  Scenario: User should login successfully
    Given I am on home page
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: User should login successfully with valid credentials
    Given  I am on home page
    When I click on login link
    And I enter email "xyz12@gmail.com"
    And I enter password "abc123"
    And I click on login button
    Then I should login successfully

  Scenario Outline: Verify the error message with invalid credentials
    Given I am on home page
    When I click on login link
    And I enter email "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should get an error message "<Login was unsuccessful>"
    Examples:
      | username | password |
      |abc123@gmail.com|xyz123|
      |abcde@gmail.com|abc12|

