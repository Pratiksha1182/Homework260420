Feature: Flight Search Feature

  As a user, I want to find search flights between cities

  Scenario: Verify That User is Able to Search Same Destination Flights

    Given I am on Home page
    When I click on Flights Tab
    And I enter origin city "London"
    And I enter destination city "Mumbai"
    And I enter outbound date of travel "20/07/2020"
    And I enter return travel date "19/09/2020"
    And I add no travellers
    And I click on search button
    Then I must see flights to the same destination
