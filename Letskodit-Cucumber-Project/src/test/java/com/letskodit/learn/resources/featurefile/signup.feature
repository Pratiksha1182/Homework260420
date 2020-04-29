Feature: Sign Up functionality
  As a user I want to sign up successfully in letskodit
  Scenario: User should sign up successfully
    Given I am on home page
    When I click on sign up link
    And I enter full name "Pratiksha Patel"
    And I enter Email address "pratiksha_03@yahoo.com"
    And I enter password "2810om"
    And I enter confirm password "2810om"
    And I click on recaptcha check box
    And I click on agree to the terms and conditions
    And I click on sign up button