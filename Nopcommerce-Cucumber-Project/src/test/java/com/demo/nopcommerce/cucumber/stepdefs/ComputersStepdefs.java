package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.ComputersPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ComputersStepdefs {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().mouseHoverOnComputerTab();
    }

    @Then("^I should navigate to computers page successfully$")
    public void iShouldNavigateToComputersPageSuccessfully() {
    }

    @And("^I mouse hover on desktop and click$")
    public void iMouseHoverOnDesktopAndClick() {
        new ComputersPage().mouseHoverOnDesktopAndClick();
    }

    @And("^I click on build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new ComputersPage().clickOnBuildYourOwnComputer();
    }

    @And("^I click on hdd radio button$")
    public void iClickOnHddRadioButton() {
        new ComputersPage().clickOnHddRadioButton();
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ComputersPage().clickOnAddToCartButton();
    }
}
