package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class BenefitsPage extends Utility {

    private static final Logger log = LogManager.getLogger(BenefitsPage.class.getName());

   /* By applyForHousingBenefitLink = By.xpath("//h2[contains(text(),'Apply for Housing Benefit')]");
    By entitlementCalculatorButton = By.xpath("//a[@class='button']");
    By startButton = By.id("StartCalculationBtn");
    By mortgageOrOwnedOutright = By.xpath("//div[contains(@class,'wrap-box housing-messages func-crop-buttons multiple-items-wrap')]//label[contains(@class,'ClaimForm.Web.Helpers.CFRadioButtonRenderedOption.4 jcf-label-active')]");
    By dropDownMenuYear = By.xpath("//span[contains(@class,'jcf-select jcf-unselectable jcf-select-short jcf-select-func-ddlanswer jcf-drop-active jcf-drop-flipped')]");
    By postCodeField = By.id("Postcode");
    By nextButton = By.id("nextButton");*/

    @FindBy(xpath = "//h2[contains(text(),'Apply for Housing Benefit')]")
    WebElement _applyForHousingBenefitLink;

    @FindBy(xpath = "//a[@class='button']")
    WebElement _entitlementCalculatorButton;

    @FindBy(id = "StartCalculationBtn")
    WebElement _startButton;

    @FindBy(xpath = "//div[contains(@class,'wrap-box housing-messages func-crop-buttons multiple-items-wrap')]//label[contains(@class,'ClaimForm.Web.Helpers.CFRadioButtonRenderedOption.4 jcf-label-active')]")
    WebElement _mortgageOrOwnedOutright;

    @FindBy(id = "Postcode")
    WebElement _postCodeField;

    @FindBy(id = "nextButton")
    WebElement _nextButton;



    public void clickOnApplyForHousingBenefitLink(){
        Reporter.addStepLog("Clicking on apply for housing benefit link" + _applyForHousingBenefitLink.toString());
        clickOnElement(_applyForHousingBenefitLink);
        log.info("Clicking on apply for housing benefit link"+ _applyForHousingBenefitLink.toString());
    }

    public void clickOnEntitlementCalcBtn(){
        Reporter.addStepLog("Clicking on entitlement calc btn" + _entitlementCalculatorButton.toString());
        clickOnElement(_entitlementCalculatorButton);
        log.info("Clicking on entitlement calc btn" + _entitlementCalculatorButton.toString());
    }

    public void clickOnStartBtn(){
        Reporter.addStepLog("Clicking on start Button" + _startButton.toString());
        clickOnElement(_startButton);
        log.info("Clicking on start Button" + _startButton.toString());
    }

    public void clickOnMortgageOrOwnedOutright(){
        Reporter.addStepLog("Clicking on Mortgage or owned outright" + _mortgageOrOwnedOutright.toString());
        clickOnElement(_mortgageOrOwnedOutright);
        log.info("Clicking on Mortgage or owned outright" + _mortgageOrOwnedOutright.toString());
    }

    public void enterPostCodeInPostCodeField(String postcode){
        Reporter.addStepLog("Entering PostCode" +postcode+ "in postcode field" + _postCodeField.toString());
        sendTextToElement(_postCodeField,"HA0 2SJ");
        log.info("Entering PostCode" +postcode+ "in postcode field" + _postCodeField.toString());

    }

    public void clickOnNextBtn(){
        Reporter.addStepLog("Clicking on next button" + _nextButton.toString());
        clickOnElement(_nextButton);
        log.info("Clicking on next button" + _nextButton.toString());
    }
    public void VerifyUserIsAbleToApplyHousingBenefits(String postcode){
        clickOnApplyForHousingBenefitLink();
        clickOnEntitlementCalcBtn();
        clickOnStartBtn();
        clickOnMortgageOrOwnedOutright();
        enterPostCodeInPostCodeField(postcode);
        clickOnNextBtn();
    }
}

