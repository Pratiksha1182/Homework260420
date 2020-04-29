package uk.org.wcht.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.org.wcht.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    //By accessibilityLink = By.xpath("//a[contains(text(),'Accessibility')]");
    @FindBy(xpath = "//button[@class='modal__close js-modal-close']")
    WebElement _customerInformation;

    @FindBy(xpath = "//a[contains(text(),'Accessibility')]")
    WebElement _accessibilityLink;

    public void customerInformation() {
        Reporter.addStepLog("Clicking on close button" + _customerInformation.toString());
        clickOnElement(_customerInformation);
        log.info("Clicking on close button" + _customerInformation.toString());
    }

    public void clickOnAccessibilityLink() {
        Reporter.addStepLog("Clicking on accessibility link" + _accessibilityLink.toString());
        clickOnElement(_accessibilityLink);
        log.info("Clicking on accessibility link" + _accessibilityLink.toString());
    }

    public void verifyUserShouldNavigateToAccessibilityPageSuccessfully() {
        customerInformation();
        clickOnAccessibilityLink();

    }
}