Feature: Register Functionality
As a user I want to register on nopCommerce
  Scenario: User should navigate to register page successfully
    Given I am on home page
    When  I click on register link
    Then  I should navigate to register page successfully

Scenario: User should register successfully
  Given I am on home page
  When I click on register link
  And I click on female radio button
  And I enter first name "Pratiksha"
  And I enter last name "Patel"
  And I enter emailId "xyab123@gmail.com"
  And I enter company name "PBS Limited"
  And I enter Password "abc123"
  And I enter confirm password "abc123"
  And I click on register button
  Then I should get registration complition message "Your registration completed"



