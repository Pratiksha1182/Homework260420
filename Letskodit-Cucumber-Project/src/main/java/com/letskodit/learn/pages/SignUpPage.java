package com.letskodit.learn.pages;

import com.cucumber.listener.Reporter;
import com.letskodit.learn.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class SignUpPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignUpPage.class.getName());


    /*By fullNameTextField = By.id("user_name");
    By emailAddressTextField = By.id("user_email");
    By passwordTextField = By.id("user_password");
    By confirmPasswordField = By.id("user_password_confirmation");
    By reCaptcha = By.xpath("//div[@class='g-recaptcha']");
    By iAgreeToTheTermsAndConditions = By.id("user_agreed_to_terms");
    By signUpButton = By.className("btn btn-primary btn-md signup-button");*/

    @FindBy(id = "user_name")
    WebElement _fullNameTextField;

    @FindBy(id = "user_email")
    WebElement _emailAddressTextField;

    @FindBy(id = "user_password")
    WebElement _passwordTextField;

    @FindBy(id = "user_password_confirmation")
    WebElement _confirmPasswordField;

    @FindBy(xpath = "//div[@class='g-recaptcha']")
    WebElement _reCaptcha;

    @FindBy(id = "user_agreed_to_terms")
    WebElement _iAgreeToTheTermsAndConditions;

    @FindBy(className = "btn btn-primary btn-md signup-button")
    WebElement _signUpButton;


    public void enterFullName( String name){
        Reporter.addStepLog("Entering Full Name" + name +"in full name field"+ _fullNameTextField.toString());
        sendTextToElement(_fullNameTextField, name);
        log.info("Entering Full Name" + name +"in full name field"+ _fullNameTextField.toString());
    }
    public void enterEmailAddress(String Email){
        Reporter.addStepLog("Entering Emial address" + Email + "in email address test field" + _emailAddressTextField.toString());
        sendTextToElement(_emailAddressTextField, Email);
        log.info("Entering Emial address" + Email + "in email address test field" + _emailAddressTextField.toString());
    }
    public void enterPassword(String Password){
        Reporter.addStepLog("Entering Password" + Password +"in password field"+ _passwordTextField.toString());
        sendTextToElement(_passwordTextField, Password);
        log.info("Entering Password" + Password +"in password field"+ _passwordTextField.toString());
    }
    public void enterConfirmPassword(String ConfirmPassword){
        Reporter.addStepLog("Entering Confirm Password" + ConfirmPassword+" in confirm password field"+ _confirmPasswordField.toString());
        sendTextToElement(_confirmPasswordField, ConfirmPassword);
        log.info("Entering Confirm Password" + ConfirmPassword+" in confirm password field"+ _confirmPasswordField.toString());
    }
    public void clickOnReCaptchaCheckBox(){
        Reporter.addStepLog("Clicking on reCaptcha" + _reCaptcha.toString());
        clickOnElement(_reCaptcha);
        log.info("Clicking on reCaptcha" + _reCaptcha.toString());
    }
    public void clickOnIAgreeToTheTermsAndConditionsCheckBox(){
        Reporter.addStepLog("Clicking on I agree to the terms and conditions" + _iAgreeToTheTermsAndConditions.toString());
        clickOnElement(_iAgreeToTheTermsAndConditions);
        log.info("Clicking on I agree to the terms and conditions" + _iAgreeToTheTermsAndConditions.toString());
    }
    public void clickOnSignUpButton(){
        Reporter.addStepLog("Clicking on SignUp button" + _signUpButton.toString());
        clickOnElement(_signUpButton);
        log.info("Clicking on SignUp button" + _signUpButton.toString());
    }
    public void verifyUserIsAbleToSignUpSuccessFully(String name,String Email,String Password,String ConfirmPassword){
        enterFullName(name);
        enterEmailAddress(Email);
        enterPassword(Password);
        enterConfirmPassword(ConfirmPassword);
        clickOnReCaptchaCheckBox();
        clickOnIAgreeToTheTermsAndConditionsCheckBox();
        clickOnSignUpButton();
    }
}


