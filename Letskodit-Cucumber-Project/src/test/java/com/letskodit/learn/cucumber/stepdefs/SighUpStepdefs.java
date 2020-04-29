package com.letskodit.learn.cucumber.stepdefs;

import com.letskodit.learn.pages.Homepage;
import com.letskodit.learn.pages.SignUpPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class SighUpStepdefs {
    @When("^I click on sign up link$")
    public void iClickOnSignUpLink() {
        new Homepage().clickOnSignUpButton();
    }

    @And("^I enter full name \"([^\"]*)\"$")
    public void iEnterFullName(String name)  {
        new SignUpPage().enterFullName(name);

    }

    @And("^I enter Email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String Email)  {
        new SignUpPage().enterEmailAddress(Email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String Password)  {
        new SignUpPage().enterPassword(Password);

    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String ConfirmPassword)  {
        new SignUpPage().enterConfirmPassword(ConfirmPassword);

    }

    @And("^I click on recaptcha check box$")
    public void iClickOnRecaptchaCheckBox() {
        new SignUpPage().clickOnReCaptchaCheckBox();
    }

    @And("^I click on agree to the terms and conditions$")
    public void iClickOnAgreeToTheTermsAndConditions() {
        new SignUpPage().clickOnIAgreeToTheTermsAndConditionsCheckBox();
    }

    @And("^I click on sign up button$")
    public void iClickOnSignUpButton() {
        new SignUpPage().clickOnSignUpButton();
    }
}
