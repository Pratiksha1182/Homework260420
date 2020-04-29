package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


/**
 * Created by Pratiksha
 */
public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(id = "Email")
    WebElement _emailField;

    @FindBy(id = "Password")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement _loginBtn;

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _welcomeText;

    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement _errorMessage;

    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering email address : " + email + " to email field : " + _emailField.toString());
        sendTextToElement(_emailField, email);
        log.info("Entering email address : " + email + " to email field : " + _emailField.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " + password + " to password field : " + _passwordField.toString());
        sendTextToElement(_passwordField, password);
        log.info("Entering password : " + password + " to password field : " + _passwordField.toString());
    }

    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on login button : " + _loginBtn.toString());
        clickOnElement(_loginBtn);
        log.info("Clicking on login button : " + _loginBtn.toString());
    }

    public String getWelcomeText() {
        Reporter.addStepLog("Getting text from : " + _welcomeText.toString());
        log.info("Getting text from : " + _welcomeText.toString());
        return getTextFromElement(_welcomeText);

    }
   // public String getErrorMessage()
    //}

    public void loginToApplication(String username, String password) {
        enterEmailId(username);
        enterPassword(password);
        clickOnLoginButton();
        getWelcomeText();
    }


}
