package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());



    @FindBy(xpath = "//button[contains(text(),'Add Customer')]")
    WebElement addCustomerTab;
    @FindBy(xpath = "//button[contains(text(),'Open Account')]")
    WebElement openAccountTab;
    @FindBy(xpath = "//button[contains(text(),'Customers')]")
    WebElement customersTab;
    @FindBy(xpath = "//button[@class='btn home']")
    WebElement homeBtLink;

    public void clickOnAddCustomerTab(){
        Reporter.addStepLog("Clicking On Add Customer Tab :" + addCustomerTab.toString());
        //waitUntilElementToBeClickable((By) addCustomerTab, 30);
        clickOnElement(addCustomerTab);
        log.info("Clicking On Add Customer Tab :" +addCustomerTab.toString());

    }
    public void clickOnOpenAccountTab(){
        Reporter.addStepLog("Clicking On Open Account Tab :" +openAccountTab.toString());
        clickOnElement(openAccountTab);
        log.info("Clicking On Open Account Tab :" +openAccountTab.toString());
    }
    public void clickOnCustomerTab(){
        Reporter.addStepLog("Clicking On Customer Tab :" +customersTab.toString());
        clickOnElement(customersTab);
        log.info("Clicking On Customer Tab :" +customersTab.toString());
    }
    public void clickOnHomeBt(){
        Reporter.addStepLog("Clicking On Home Button :" +homeBtLink.toString());
        clickOnElement(homeBtLink);
        log.info("Clicking On Home Button :" +homeBtLink.toString());
    }

}
