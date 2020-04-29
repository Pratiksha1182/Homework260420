package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Jay
 */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(linkText = "Log in")
    WebElement _loginLink;

    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement _registerLink;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement _computerTab;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement _booksTab;



    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on login link" + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on login link : " + _loginLink.toString());
    }

    public void clickOnRegisterLink() {
        Reporter.addStepLog("Clicking on login link : " + _registerLink.toString());
        clickOnElement(_registerLink);
        log.info("Clicking on login link : " + _registerLink.toString());
    }
    public void mouseHoverOnComputerTab(){
        Reporter.addStepLog("Mouse hovering on computer tab " + _computerTab.toString());
        clickOnElement(_computerTab);
        log.info("Mouse hovering on computer tab " + _computerTab.toString());
    }
    public void clickOnBooksTab(){
        Reporter.addStepLog("Clicking on books" + _booksTab.toString());
        clickOnElement(_booksTab);
        log.info("Clicking on books" + _booksTab.toString());
    }
}
