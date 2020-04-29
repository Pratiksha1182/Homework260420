package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterStepDefs {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {

    }

    @And("^I click on female radio button$")
    public void iClickOnFemaleRadioButton() {
        new RegisterPage().clickOnRadioButton();

    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String FirstName) {
    new RegisterPage().enterFirstName(FirstName);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String Lastname)  {
    new RegisterPage().enterLastName(Lastname);
    }

    @And("^I enter emailId \"([^\"]*)\"$")
    public void iEnterEmailId(String Email)  {
    new RegisterPage().enterEmailId(Email);
    }

    @And("^I enter company name \"([^\"]*)\"$")
    public void iEnterCompanyName(String CompanyName)  {
    new RegisterPage().enterCompanyNameField(CompanyName);

    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String Password)  {
        new RegisterPage().enterPassword(Password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String ConfirmPassword)  {
        new RegisterPage().enterconfirmpassword(ConfirmPassword);

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should get registration complition message \"([^\"]*)\"$")
    public void iShouldGetRegistrationComplitionMessage()  {
        Assert.assertEquals(new RegisterPage().getRegistrationComplition(),"Your registration completed");

    }
}
