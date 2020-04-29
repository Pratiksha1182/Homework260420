package com.letskodit.learn.cucumber.stepdefs;

import com.letskodit.learn.pages.Homepage;
import com.letskodit.learn.pages.PracticePage;
import com.sun.org.apache.xalan.internal.xslt.Process;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PracticeStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on practice link$")
    public void iClickOnPracticeLink() {
        new Homepage().clickOnPracticeLink();
    }

    @Then("^I should navigate to practice page successfully$")
    public void iShouldNavigateToPracticePageSuccessfully() {
    }

    @And("^I click on honda radio button$")
    public void iClickOnHondaRadioButton() {
        new PracticePage().clickOnHondaRadioButton();
    }

    @And("^I click on select cars and select \"([^\"]*)\"$")
    public void iClickOnSelectCarsAndSelect(String cars)  {
        new PracticePage().clickOnSelectCarsAndSelectHonda(cars);
    }

    @And("^I click on peach option$")
    public void iClickOnPeachOption() {
        new PracticePage().clickOnPeachOption();
    }

    @Then("^I click on honda check box$")
    public void iClickOnHondaCheckBox() {
        new PracticePage().clickOnHondaCheckBox();
    }
}
