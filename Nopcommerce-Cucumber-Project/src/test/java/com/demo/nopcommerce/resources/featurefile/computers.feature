Feature: Computers functionality
  As a user I want add product to the shopping cart
Scenario: User should navigate to computers page successfully
  Given I am on home page
  When I click on computer tab
  Then I should navigate to computers page successfully

  Scenario: User should add product to the cart successfully
    Given I am on home page
    When I click on computer tab
    And I mouse hover on desktop and click
    And I click on build your own computer
    And I click on hdd radio button
    Then I click on add to cart button

