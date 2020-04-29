package uk.co.expedia.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.expedia.pages.HomePage;
import uk.co.expedia.pages.SignInPage;

public class LoginStepdefs {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on account tab$")
    public void iClickOnAccountTab() {
        new HomePage().clickOnAccountMenu();
    }

    @And("^I click on sign in tab$")
    public void iClickOnSignInTab() {
        new HomePage().clickOnSignInTab();
    }

    @And("^I enter Email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new SignInPage().enterEmailAddress(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @And("^I enter valid Email \"([^\"]*)\"$")
    public void iEnterValidEmail(String email)  {
        new SignInPage().enterEmailAddress(email);

    }

    @And("^I enter invalid password \"([^\"]*)\"$")
    public void iEnterInvalidPassword(String password) {
        new SignInPage().enterPassword(password);

    }

    @Then("^I should Not login successfully$")
    public void iShouldNotLoginSuccessfully() {
    }
}
