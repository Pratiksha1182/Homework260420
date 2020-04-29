package com.letskodit.learn.cucumber;

import com.cucumber.listener.Reporter;
import com.letskodit.learn.basepage.BasePage;
import com.letskodit.learn.browserselector.BrowserSelector;
import com.letskodit.learn.loadproperty.LoadProperty;
import com.letskodit.learn.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    String baseUrl = loadProperty.getProperty("baseUrl");

    String browser = loadProperty.getProperty("browser");

    @Before
    public void openBrowser(){
        browserSelector.selectorBrowser(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
        Reporter.assignAuthor("Pratiksha Patel");
    }

    @After
    public void tearDown(Scenario scenario) {
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver,scenario.getName().replace(" ","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        driver.quit();
    }

}
