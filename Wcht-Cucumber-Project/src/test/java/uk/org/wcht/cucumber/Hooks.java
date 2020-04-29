package uk.org.wcht.cucumber;

import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.org.wcht.basepage.BasePage;
import uk.org.wcht.browserselector.BrowserSelector;
import uk.org.wcht.loadproperty.LoadProperty;
import uk.org.wcht.utility.Utility;

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
