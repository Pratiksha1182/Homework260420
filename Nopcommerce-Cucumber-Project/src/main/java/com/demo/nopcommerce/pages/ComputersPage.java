package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputersPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputersPage.class.getName());

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement _desktopsTab;
    @FindBy(xpath = "//h2[@class='title']//a[contains(text(),'Desktops')]")
    WebElement _buildYourOwnComputer;
    @FindBy(xpath = "//h2[@class='product-title']//a[contains(text(),'Build your own computer')]")
    WebElement _hddRadioButton;
    @FindBy(id = "add-to-cart-button-1")
    WebElement _addToCart;
    @FindBy(xpath = "//a[contains(text(),'shopping cart')]")
    WebElement _addedToShoppingCartText;

    public void mouseHoverOnDesktopAndClick(){
        Reporter.addStepLog("Mouse hovering on desktop and click" + _desktopsTab.toString());
        mouseHoverToElementAndClick(_desktopsTab);
        log.info("Mouse hovering on desktop and click" + _desktopsTab.toString());
    }

    public void clickOnBuildYourOwnComputer(){
        Reporter.addStepLog("clicking on build your own computer" + _buildYourOwnComputer.toString());
        clickOnElement(_buildYourOwnComputer);
        log.info("clicking on build your own computer" + _buildYourOwnComputer.toString());
    }

    public void clickOnHddRadioButton(){
        Reporter.addStepLog("Clicking on Hdd radio button" + _hddRadioButton.toString());
        //waitUntilElementToBeClickable(_hddRadioButton, 20);
        clickOnElement(_hddRadioButton);
        log.info("Clicking on Hdd radio button" + _hddRadioButton.toString());
    }

    public void clickOnAddToCartButton(){
        Reporter.addStepLog("Clicking on add to cart button" + _addToCart.toString());
        clickOnElement(_addToCart);
        log.info("Clicking on add to cart button" + _addToCart.toString());
    }

    public String addToCartConfirmationText(){
        Reporter.addStepLog("Get add to cart confirmation" + _addedToShoppingCartText.toString());
        log.info("Get add to cart confirmation" + _addedToShoppingCartText.toString());
        return getTextFromElement(_addedToShoppingCartText);
    }
    public void userShouldBeAbleToAddComputerToShoppingCart(){
        mouseHoverOnDesktopAndClick();
        clickOnBuildYourOwnComputer();
        clickOnHddRadioButton();
        clickOnAddToCartButton();
        clickOnAddToCartButton();
    }
}

