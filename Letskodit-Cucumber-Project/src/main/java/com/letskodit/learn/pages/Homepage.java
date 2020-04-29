package com.letskodit.learn.pages;

import com.cucumber.listener.Reporter;
import com.letskodit.learn.utility.Utility;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Homepage extends Utility {

  private static final Logger log = LogManager.getLogger(Homepage.class.getName());

 /* By practiceLink = By.xpath("//a[@class='fedora-navbar-link navbar-link']");
  By loginLink = By.xpath("//a[@class='navbar-link fedora-navbar-link']");
  By signUpButton = By.id("header-sign-up-btn");*/

  @FindBy(xpath = "//a[@class='fedora-navbar-link navbar-link']")
  WebElement _practiceLink;

  @FindBy(xpath = "//a[@class='navbar-link fedora-navbar-link']")
  WebElement _loginLink;

  @FindBy(id = "header-sign-up-btn")
  WebElement _signUpButton;

  public void clickOnPracticeLink(){
    Reporter.addStepLog("Clicking on practice link" + _practiceLink.toString());
    clickOnElement(_practiceLink);
    log.info("Clicking on practice link" + _practiceLink.toString());
  }
  public void clickOnLoginLink(){
    Reporter.addStepLog("Clicking on login link " + _loginLink.toString());
    clickOnElement(_loginLink);
    log.info("Clicking on login link" + _loginLink.toString());
  }
  public void clickOnSignUpButton(){
    Reporter.addStepLog("Clicking on sign up button" + _signUpButton.toString());
    clickOnElement(_signUpButton);
    log.info("Clicking on sign up button" + _signUpButton.toString());
  }

}
