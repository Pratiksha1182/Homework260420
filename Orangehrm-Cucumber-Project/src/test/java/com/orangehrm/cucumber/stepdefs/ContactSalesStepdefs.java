package com.orangehrm.cucumber.stepdefs;

import com.orangehrm.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactSalesStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on contact sales button$")
    public void iClickOnContactContactSalesButton() {
        new HomePage().clickOnContactSalesButton();
    }

    @Then("^I should navigate to contact sales page$")
    public void iShouldNavigateToContactSalesPage() {
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName)  {
        new HomePage().enterFirstName(firstName);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName)  {
        new HomePage().enterLastName(lastName);

    }

    @And("^I enter company name \"([^\"]*)\"$")
    public void iEnterCompanyName(String companyName) {
        new HomePage().enterCompanyName(companyName);

    }

    @And("^I select number employees \"([^\"]*)\"$")
    public void iSelectNumberEmployees(String numberofEmployees) {
        new HomePage().selectNumberOfEmployeesFromDropDown(numberofEmployees);

    }

    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String phoneNumber) {
        new HomePage().enterPhoneNumber(phoneNumber);

    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle)  {
        new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter \"([^\"]*)\"$")
    public void iEnter(String email)  {
        new HomePage().enterEmail(email);

    }

    @And("^I select country name \"([^\"]*)\"$")
    public void iSelectCountryName(String countryName) {
        new HomePage().selectCountryNameFromDropDown(countryName);

    }

    @Then("^I enter comment \"([^\"]*)\"$")
    public void iEnterComment(String comment)  {
        new HomePage().enterComment(comment);

    }
}
