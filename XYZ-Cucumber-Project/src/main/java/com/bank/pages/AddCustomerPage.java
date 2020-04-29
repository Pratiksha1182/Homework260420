package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class AddCustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());



    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstNameField;
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lastNameField;
    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement postCodeField;
    @FindBy(xpath = "//form[@name='myForm']//button[contains(text(),'Add Customer')]")
    WebElement addCustomerBt;



    public void enterFirstName(String firstName){
        Reporter.addStepLog("Entering FirstName :" + firstName + "to firstname field :" + firstNameField.toString());
        sendTextToElement(firstNameField, firstName);
        log.info("Entering FirstName : " + firstName + "to firstname field :" + firstNameField.toString());

    }
    public void enterLastName(String lastName){
        Reporter.addStepLog("Entering LastName :" +lastName+ "to lastname field :" + lastNameField.toString());
        sendTextToElement(lastNameField, lastName);
        log.info("Entering LastName :" +lastName+ "to lastname field :" + lastNameField.toString());
    }
    public void enterPostCode(String postcode){
        Reporter.addStepLog("Entering Postcode :" +postcode+ "in postcode field :" + postCodeField.toString());
        sendTextToElement(postCodeField, postcode);
        log.info("Entering Postcode :" +postcode+ "in postcode field :" + postCodeField.toString());
    }
    public void clickOnAddCustomerBt(){
        Reporter.addStepLog("Clicking On AddCustomer Button :" + addCustomerBt.toString());
        //log.info("Clicking On AddCustomer Button :" + addCustomerBt.toString());
        clickOnElement(addCustomerBt);
        log.info("Clicking On AddCustomer Button :" + addCustomerBt.toString());
    }


}
