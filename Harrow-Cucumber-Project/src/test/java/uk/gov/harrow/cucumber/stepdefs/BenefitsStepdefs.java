package uk.gov.harrow.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.gov.harrow.pages.BenefitsPage;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.MainMenuPage;

public class BenefitsStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on service button$")
    public void iClickOnServiceButton() {
        new HomePage().clickOnServicesButton();
    }

    @And("^I mouse hover on benefits and click$")
    public void iMouseHoverOnBenefitsAndClick() {
        new MainMenuPage().mouseHoverOnBenefitsAndClick();
    }

    @Then("^I am on benefits page$")
    public void iAmOnBenefitsPage() {
    }

    @When("^I click on apply for housing benefits$")
    public void iClickOnApplyForHousingBenefits() {
        new BenefitsPage().clickOnApplyForHousingBenefitLink();
    }

    @And("^I click on entitlement calculator button$")
    public void iClickOnEntitlementCalculatorButton() {
        new BenefitsPage().clickOnEntitlementCalcBtn();
    }

    @And("^I click on start button$")
    public void iClickOnStartButton() {
        new BenefitsPage().clickOnStartBtn();
    }

    @And("^I click on mortgage or owned outright$")
    public void iClickOnMortgageOrOwnedOutright() {
        new BenefitsPage().clickOnMortgageOrOwnedOutright();
    }

    @And("^I enter postcode \"([^\"]*)\"$")
    public void iEnterPostcode(String postcode)  {
        new BenefitsPage().enterPostCodeInPostCodeField(postcode);
    }

    @Then("^I click on next button$")
    public void iClickOnNextButton() {
        new BenefitsPage().clickOnNextBtn();
    }


}
