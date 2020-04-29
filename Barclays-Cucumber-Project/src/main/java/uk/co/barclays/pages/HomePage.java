package uk.co.barclays.pages;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import uk.co.barclays.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

/*
By bankMenuItem = By.linkText("Bank");
By switchingBankAccountToBarclays = By.linkText("Switching bank account to Barclays");
By newToUsButton = By.xpath("//a[@class='btn btn-secondary']");
By branchFinderButton = By.xpath("//a[contains(text(),'Branch finder')]");
By locationTextField = By.xpath("//input[@id='location']");
By searchButton = By.xpath("//input[@class='btn btn-primary']");
*/

@FindBy(linkText = "Bank")
    WebElement _bankMenuItem;
@FindBy(linkText = "Switching bank account to Barclays")
    WebElement _switchingBankAccountToBarclays;
@FindBy(xpath = "//a[@class='btn btn-secondary']")
    WebElement _newToUsButton;
@FindBy(xpath = "//a[contains(text(),'Branch finder')]")
    WebElement _branchFinderButton;
@FindBy(xpath = "//input[@id='location']")
    WebElement _locationTextField;
@FindBy(xpath = "//input[@class='btn btn-primary']")
    WebElement _searchButton;

public void mouseHoverOnBank(){
    Reporter.addStepLog("Mouse Hovering on Bank Menu" + _bankMenuItem.toString());
    mouseHoverToElement(_bankMenuItem);
    log.info("Mouse Hovering on Bank Menu" + _bankMenuItem.toString());
}
public void mouseHoverAndClickOnSwitchingBankAccountToBarclays(){
    Reporter.addStepLog("Mouse Hovering to switching bank account to Barclays and clicking" + _switchingBankAccountToBarclays.toString());
    mouseHoverToElementAndClick(_switchingBankAccountToBarclays);
    log.info("Mouse Hover to switching bank account to Barclays and clicking" + _switchingBankAccountToBarclays.toString());
}
public void clickOnNewToUsButton(){
    Reporter.addStepLog("Clicking on new to us button" + _newToUsButton.toString());
    clickOnElement(_newToUsButton);
    log.info("Clicking on new to us button" + _newToUsButton.toString());
}
public void clickOnBranchFinderButton(){
    Reporter.addStepLog("Clicking on branch finder button" + _branchFinderButton.toString());
    clickOnElement(_branchFinderButton);
    log.info("Clicking on branch finder button" + _branchFinderButton.toString());
}
public void enterLocation(String location){
    Reporter.addStepLog("Entering location "+ location +" in location field" + _locationTextField.toString());
    sendTextToElement(_locationTextField, location);
    log.info("Entering location "+ location +" in location field" + _locationTextField.toString());
}
public void clickOnSearchButton(){
    Reporter.addStepLog("Clicking on search button" + _searchButton.toString());
    clickOnElement(_searchButton);
    log.info("Clicking on search button" + _searchButton.toString());
}
public void verifyThatUserIsAbleToFindTheBranchToSwitchBankAccount(String location){
    mouseHoverOnBank();
    mouseHoverAndClickOnSwitchingBankAccountToBarclays();
    clickOnNewToUsButton();
    clickOnBranchFinderButton();
    enterLocation(location);
    clickOnSearchButton();
}
}
