package uk.org.wcht.cucumber.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.org.wcht.pages.AccessibilityPage;
import uk.org.wcht.pages.HomePage;

public class AccessibilityStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on close tab of customer information$")
    public void iClickOnCloseTabOfCustomerInformation() {
        new HomePage().customerInformation();
    }

    @And("^I click on accessibility link$")
    public void iClickOnAccessibilityLink() {
        new HomePage().clickOnAccessibilityLink();
    }

    @Then("^I should navigate to accessibility page successfully$")
    public void iShouldNavigateToAccessibilityPageSuccessfully() {
    }

    @And("^I mouse hover on your community tab$")
    public void iMouseHoverOnYourCommunityTab() {
        new AccessibilityPage().mouseHoverOnYourCommunityTab();
    }

    @Then("^I mouse hover on get involved and click$")
    public void iMouseHoverOnGetInvolvedAndClick() {
        new AccessibilityPage().mouseHoverOnGetInvolvedAndClick();
    }
}
