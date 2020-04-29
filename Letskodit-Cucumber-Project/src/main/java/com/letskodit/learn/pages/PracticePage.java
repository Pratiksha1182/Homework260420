package com.letskodit.learn.pages;

import com.cucumber.listener.Reporter;
import com.letskodit.learn.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PracticePage extends Utility {

    private static final Logger log = LogManager.getLogger(PracticePage.class.getName());

   /* By hondaRadioBtn = By.id("hondaradio");
    By selectClassCars = By.xpath("//select[@id='carselect']");
    By selectPeachOption = By.xpath("//option[contains(text(),'Peach')]");
    By selectHondaCheckBox = By.id("hondacheck");
    By yourNameField = By.id("name");
    By alertbutton = By.id("alertbtn");
    By mousehoverbutton = By.id("mousehover");
    By selectTop = By.xpath("//a[contains(text(),'Top')]");
    */
    @FindBy(id = "hondaradio")
    WebElement _hondaRadioBtn;

    @FindBy(xpath = "//select[@id='carselect']")
    WebElement _selectClassCars;

    @FindBy(xpath = "//option[contains(text(),'Peach')]")
    WebElement _selectPeachOption;

    @FindBy(id = "hondacheck")
    WebElement _selectHondaCheckBox;

    @FindBy(id = "name")
    WebElement _yourNameField;

    @FindBy(id = "alertbtn")
    WebElement _alertbutton;

    @FindBy(id = "mousehover")
    WebElement _mousehoverbutton;

    @FindBy(xpath = "//a[contains(text(),'Top')]")
    WebElement _selectTop;

    public void clickOnHondaRadioButton() {
        Reporter.addStepLog("Clicking on HDD radio button" + _hondaRadioBtn.toString());
        clickOnElement(_hondaRadioBtn);
        log.info("Clicking on HDD radio button" + _hondaRadioBtn.toString());
    }
    public void clickOnSelectCarsAndSelectHonda(String cars){
        Reporter.addStepLog("Selecting car and clicking" + _selectClassCars.toString());
        clickOnElement(_selectClassCars);
        selectByVisibleTextFromDropDown(_selectClassCars, cars);
        log.info("Selecting car and clicking" + _selectClassCars.toString());
    }
    public void clickOnPeachOption(){
        Reporter.addStepLog("Select option Peach" + _selectPeachOption.toString());
        clickOnElement(_selectPeachOption);
        log.info("Select option Peach" + _selectPeachOption.toString());
    }
    public void clickOnHondaCheckBox(){
        Reporter.addStepLog("Selecting Honda checkbox" + _selectHondaCheckBox.toString());
        clickOnElement(_selectHondaCheckBox);
        log.info("Selecting Honda checkbox" + _selectHondaCheckBox.toString());
    }
    public void enterNameInYourNameField(String name){
        Reporter.addStepLog("Entering name"+ name +"in your name field" + _yourNameField.toString());
        sendTextToElement(_yourNameField, name);
        log.info("Entering name"+ name +"in your name field" + _yourNameField.toString());
    }
    public void clickOnAlertButton(){
        Reporter.addStepLog("Clicking on Alert button" + _alertbutton.toString());
        clickOnElement(_alertbutton);
        log.info("Clicking on Alert button" + _alertbutton.toString());
    }
    public void mouseHoverOnMouseHoverButton(){
        Reporter.addStepLog("Mouse hover on MouseHover button" + _mousehoverbutton.toString());
        mouseHoverToElementAndClick(_mousehoverbutton);
        log.info("Mouse hover on MouseHover button" + _mousehoverbutton.toString());
    }
    public void clickOnTop(){
        Reporter.addStepLog("Clicking on Select Top" + _selectTop.toString());
        clickOnElement(_selectTop);
        log.info("Clicking on Select Top" + _selectTop.toString());
    }
    public void userIsAbleToUsePracticePageFunctions(String cars){
        clickOnHondaRadioButton();
        clickOnSelectCarsAndSelectHonda(cars);
        clickOnPeachOption();
        clickOnHondaCheckBox();
    }
}

