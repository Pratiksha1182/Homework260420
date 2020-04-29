package com.orangehrm.pages;

import com.cucumber.listener.Reporter;
import com.orangehrm.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @FindBy(xpath = "//a[contains(@class,'btn-orange contact-ohrm')]")
    WebElement _contactSalesButton;
    @FindBy(name = "firstname")
    WebElement _firstNameField;
    @FindBy(name = "lastname")
    WebElement _lastNameField;
    @FindBy(name = "company")
    WebElement _companyNameField;
    @FindBy(name = "numemployees")
    WebElement _numberOfEmployees;
    @FindBy(name = "phone")
    WebElement _phoneNumberField;
    @FindBy(name = "jobtitle")
    WebElement _jobTitleField;
    @FindBy(name = "email")
    WebElement _emailField;
    @FindBy(name = "country")
    WebElement _countryField;
    @FindBy(name = "message")
    WebElement _commentField;
    @FindBy(xpath = "//input[@class='hs-button primary large']")
    WebElement _submitButton;


    public void clickOnContactSalesButton() {
        Reporter.addStepLog("Clicking on contact sales button" + _contactSalesButton.toString());
        clickOnElement(_contactSalesButton);
        log.info("Clicking on contact sales button" + _contactSalesButton.toString());
    }

    public void enterFirstName(String firstName) {
        Reporter.addStepLog("Entering first name" + firstName + "in first name field" + _firstNameField.toString());
        sendTextToElement(_firstNameField, firstName);
        log.info("Entering first name" + firstName + "in first name field" + _firstNameField.toString());
    }

    public void enterLastName(String lastName) {
        Reporter.addStepLog("Entering last name" + lastName + "in last name field" + _lastNameField.toString());
        sendTextToElement(_lastNameField, lastName);
        log.info("Entering last name" + lastName + "in last name field" + _lastNameField.toString());
    }

    public void enterCompanyName(String companyName) {
        Reporter.addStepLog("Entering Company name" + companyName + "in company name field" + _companyNameField.toString());
        sendTextToElement(_companyNameField, companyName);
        log.info("Entering Company name" + companyName + "in company name field" + _companyNameField.toString());
    }

    public void selectNumberOfEmployeesFromDropDown(String numberofEmployees) {
        Reporter.addStepLog("Selecting number of employees" + _numberOfEmployees.toString());
        selectByValueFromDropDown(_numberOfEmployees, numberofEmployees);
        log.info("Selecting number of employees" + _numberOfEmployees.toString());
    }

    public void enterPhoneNumber(String phoneNumber) {
        Reporter.addStepLog("Entering phone number" + phoneNumber + " in phone number field" + _phoneNumberField.toString());
        sendTextToElement(_phoneNumberField, phoneNumber);
        log.info("Entering phone number" + phoneNumber + " in phone number field" + _phoneNumberField.toString());
    }

    public void enterJobTitle(String jobTitle) {
        Reporter.addStepLog("Entering job title" + jobTitle + "in jobtitle field" + _jobTitleField.toString());
        sendTextToElement(_jobTitleField, jobTitle);
        log.info("Entering job title" + jobTitle + "in jobtitle field" + _jobTitleField.toString());
    }

    public void enterEmail(String email) {
        Reporter.addStepLog("Entering email" + email + "in email field" + _emailField.toString());
        sendTextToElement(_emailField, email);
        log.info("Entering email" + email + "in email field" + _emailField.toString());
    }

    public void selectCountryNameFromDropDown(String countryName) {
        Reporter.addStepLog("Selecting country name" + _countryField.toString());
        selectByValueFromDropDown(_countryField, countryName);
        log.info("Selecting country name" + _countryField.toString());
    }

    public void enterComment(String comment) {
        Reporter.addStepLog("Entering comment" + _commentField.toString());
        sendTextToElement(_commentField, comment);
        log.info("Entering comment" + _commentField.toString());
    }
   public void verifyUserIsAbleToInputContactSalesDetails(String firstName,String lastName,String companyName,String numberofEmployees,String phoneNumber,String jobTitle,String email,String countryName,String comment){
        clickOnContactSalesButton();
        enterFirstName(firstName);
        enterLastName(lastName);
        enterCompanyName(companyName);
        selectNumberOfEmployeesFromDropDown(numberofEmployees);
        enterPhoneNumber(phoneNumber);
        enterJobTitle(jobTitle);
        enterEmail(email);
        selectCountryNameFromDropDown(countryName);
        enterComment(comment);
   }
    /*public void clickOnSubmitButton(){
        Reporter.log("Clicking on submit button" + _submitButton.toString()+"<br>");
        log.info("Clicking on submit button" + _submitButton.toString());
        waitUntilElementToBeClickable((By)_submitButton,20);
        clickOnElement(_submitButton);
        //log.info("Clicking on submit button" + _submitButton.toString());

   }*/

}

