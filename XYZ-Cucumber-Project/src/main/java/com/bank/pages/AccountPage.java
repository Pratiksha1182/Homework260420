package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());



    @FindBy(xpath = "//button[contains(text(),'Deposit')]")
    WebElement depositLink;
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement depositButton;
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement getTextDepositSuccessful;
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement amountToBeWithdrawn;
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement withdrawBt;
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement getTransactionText;
    @FindBy(xpath = "//button[contains(text(),'Withdrawl')]")
    WebElement withdrawalLink;
    @FindBy(xpath = "//button[@class='btn logout']")
    WebElement logOutBtn;
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement errorMessage;
    @FindBy(xpath = "//button[@class='btn home']")
    WebElement homeBtLink;

    public void clickOnHomeBt(){
        Reporter.addStepLog("Clicking On Home Button :" + homeBtLink.toString());
        clickOnElement(homeBtLink);
        log.info("Clicking On Home Button :" +homeBtLink.toString());
    }

    public void clickOnDepositButton() {
        Reporter.addStepLog("Clicking On Deposit Button :" +depositLink.toString());
        clickOnElement(depositLink);
        log.info("Clicking On Deposit Button :" +depositLink.toString());
    }

    public void enterAmountToDeposit(int amount) {
        Reporter.addStepLog("Entering Amount To Deposit : " +amount +"in deposit field : " + amountToBeWithdrawn.toString());
        sendTextToElement(this.amountToBeWithdrawn, String.valueOf(amount));
        log.info("Entering Amount To Deposit : " +amount +"in deposit field : " + amountToBeWithdrawn.toString());

    }

    public void clickDepositFeature() {
        Reporter.addStepLog("Clicking on Deposit Button :" +depositButton.toString());
        clickOnElement(depositButton);
        log.info("Clicking on Deposit Button :" +depositButton.toString());
    }

    public String getTextDepositSuccessfulMessage() {
        Reporter.addStepLog("Getting Deposit Successful Message :" + getTextDepositSuccessful.toString());
        log.info("Getting Deposit Successful Message :" + getTextDepositSuccessful.toString());
        return getTextFromElement(getTextDepositSuccessful);
    }

    public void clickOnWithdrawalTab() {
        Reporter.addStepLog("Clicking On Withdrawl Tab :" + withdrawalLink.toString());
        clickOnElement(withdrawalLink);
        log.info("Clicking On Withdrawl Tab :" + withdrawalLink.toString());
    }

    public void enterAmountToWithdrawl( String amount) {
        Reporter.addStepLog("Entering Amount To Withdrawl :" +amount + "in withdrawl field :" + amountToBeWithdrawn.toString() );
        sendTextToElement(amountToBeWithdrawn, amount);
        log.info("Entering Amount To Withdrawl :" +amount + "in withdrawl field :" + amountToBeWithdrawn.toString());
    }

    public void clickOnWithdrawFeature() {
        Reporter.addStepLog("Clicking On Withdraw feature :" + withdrawBt.toString());
        clickOnElement(withdrawBt);
        log.info("Clicking On Withdraw feature :" + withdrawBt.toString());
    }

    public String getTextTransaction() {
        Reporter.addStepLog("Getting transaction text :" +getTransactionText.toString());
        log.info("Getting transaction text :" +getTransactionText.toString());
        return getTextFromElement(getTransactionText);
    }
    public void clickOnLogoutButton(){
        Reporter.addStepLog("Clicking On LogOut Button :" +logOutBtn.toString());
        clickOnElement(logOutBtn);
        log.info("Clicking On LogOut Button :" +logOutBtn.toString());
    }

    public boolean isLogoutButtonDisplayed(){
        if ((logOutBtn).isDisplayed()){
            return true;
        }else {
            return false;
        }
    }
    public String getErrorMessage(){
        Reporter.addStepLog("Getting Error Message :" + errorMessage.toString());
        log.info("Getting Error Message :" + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

}
