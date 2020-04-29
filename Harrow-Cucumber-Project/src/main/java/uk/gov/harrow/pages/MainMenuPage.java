package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class MainMenuPage extends Utility {

    private static final Logger log = LogManager.getLogger(MainMenuPage.class.getName());

    //By mainMenuAerialLabel = By.xpath("//a[contains(text(),'Benefits')]");

    @FindBy(xpath = "//a[contains(text(),'Benefits')]")
    WebElement _mainMenuAerialLabel;

    public void mouseHoverOnBenefitsAndClick() {
        Reporter.addStepLog("Clicking on Main menu" + _mainMenuAerialLabel.toString());
        // waitUntilElementToBeClickable(_mainMenuAerialLabel,20);
        //clickOnElement(_mainMenuAerialLabel);
        mouseHoverToElementAndClick(_mainMenuAerialLabel);
        log.info("Clicking on Main menu" + _mainMenuAerialLabel.toString());
    }
        public void verifyUserIsAbleToNavigateToBenefitsPage(){
        mouseHoverOnBenefitsAndClick();

        }
    }

