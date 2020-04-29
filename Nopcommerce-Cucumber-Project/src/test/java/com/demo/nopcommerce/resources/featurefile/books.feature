Feature: Books functionality
  As a user I want to add a book to the shopping cart
  Scenario: User should add a book to cart
  When I click on books tab
  And I click on position sort by and select "Name: A to Z"
  And I click on Ray Beadbury book
  Then I click on add to cart btn