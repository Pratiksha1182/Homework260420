package uk.co.barclays.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.barclays.pages.HomePage;

public class MenuStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I mouse hover on bank$")
    public void iMouseHoverOnBank() {
        new HomePage().mouseHoverOnBank();
    }

    @And("^I mouse hover and click on switching bank account to Barclays$")
    public void iMouseHoverAndClickOnSwitchingBankAccountToBarclays() {
        new HomePage().mouseHoverAndClickOnSwitchingBankAccountToBarclays();
    }

    @Then("^I click on new to us button$")
    public void iClickOnNewToUsButton() {
        new HomePage().clickOnNewToUsButton();
    }
}
