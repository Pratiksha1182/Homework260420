package uk.co.expedia.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.expedia.pages.FlightsPage;
import uk.co.expedia.pages.HomePage;

public class FlightStepdefs {
    @When("^I click on Flights Tab$")
    public void iClickOnFlightsTab() {
        new HomePage().clickOnFlightsTab();
    }

    @And("^I enter origin city \"([^\"]*)\"$")
    public void iEnterOriginCity(String origion) {
        new FlightsPage().enterFlyingFrom(origion);

    }

    @And("^I enter destination city \"([^\"]*)\"$")
    public void iEnterDestinationCity(String destination)  {
        new FlightsPage().enterGoingTo(destination);

    }

    @And("^I enter outbound date of travel \"([^\"]*)\"$")
    public void iEnterOutboundDateOfTravel(String date)  {
        new FlightsPage().enterDepartingDate(date);

    }

    @And("^I enter return travel date \"([^\"]*)\"$")
    public void iEnterReturnTravelDate(String date)  {
        new FlightsPage().enterReturningDate(date);

    }

    @And("^I add no travellers$")
    public void iAddNoTravellers() {
        new FlightsPage().clickOnTravellers();
        new FlightsPage().clickOnAdults();
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new FlightsPage().clickOnSearchButton();
    }

    @Then("^I must see flights to the same destination$")
    public void iMustSeeFlightsToTheSameDestination() {
    }
}
