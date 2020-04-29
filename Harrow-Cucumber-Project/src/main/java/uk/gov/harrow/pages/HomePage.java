package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    /*By serviceButton = By.xpath("//span[@class='button__text'][contains(text(),'Services')]");
    By benefitsLink = By.xpath("//a[contains(text(),'Benefits')]");
    By mainMenuAerialLabel = By.xpath("//nav[@class='nav nav--primary']");*/

    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _serviceButton;

    @FindBy(xpath = "//a[contains(text(),'Benefits')]")
    WebElement _benefitsLink;

    @FindBy(xpath = "//nav[@class='nav nav--primary']")
    WebElement _mainMenuAerialLabel;


    public void clickOnServicesButton() {
        Reporter.addStepLog("Clicking on service Button" + _serviceButton.toString());
        clickOnElement(_serviceButton);
        log.info("Clicking on service Button"+ _serviceButton.toString());
    }

    public void clickOnBenefitsLink() {
        Reporter.addStepLog("Clicking on Benefits Link" + _benefitsLink.toString());
        clickOnElement(_benefitsLink);
        log.info("Clicking on Benefits Link "+ _benefitsLink.toString());
    }

    public void mouseHoverOnBenefitsAndClick() {
        Reporter.addStepLog("clicking on Main menu" + _mainMenuAerialLabel.toString());
        mouseHoverToElementAndClick(_mainMenuAerialLabel);
        log.info("clicking on Main menu"+ _mainMenuAerialLabel.toString());
    }
    public void verifyUserIsAbleToApplyForHousingBenefits(){
        clickOnServicesButton();
        clickOnBenefitsLink();
        mouseHoverOnBenefitsAndClick();
    }

}