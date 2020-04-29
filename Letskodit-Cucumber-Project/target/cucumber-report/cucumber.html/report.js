$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/letskodit/learn/resources/featurefile/practice.feature");
formatter.feature({
  "line": 1,
  "name": "Practice functionality",
  "description": "As a user I want to use functions of practice page in letskodit",
  "id": "practice-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 47621722000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to practice page successfully",
  "description": "",
  "id": "practice-functionality;user-should-navigate-to-practice-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to practice page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1840789500,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iClickOnPracticeLink()"
});
formatter.result({
  "duration": 2311923800,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iShouldNavigateToPracticePageSuccessfully()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.after({
  "duration": 1799390100,
  "status": "passed"
});
formatter.before({
  "duration": 49686707000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to use functions on practice page",
  "description": "",
  "id": "practice-functionality;user-should-be-able-to-use-functions-on-practice-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on practice link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on honda radio button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on select cars and select \"Honda\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on peach option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on honda check box",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iClickOnPracticeLink()"
});
formatter.result({
  "duration": 5744889000,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iClickOnHondaRadioButton()"
});
formatter.result({
  "duration": 12504775600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 35
    }
  ],
  "location": "PracticeStepdefs.iClickOnSelectCarsAndSelect(String)"
});
formatter.result({
  "duration": 7909722700,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iClickOnPeachOption()"
});
formatter.result({
  "duration": 335862900,
  "status": "passed"
});
formatter.match({
  "location": "PracticeStepdefs.iClickOnHondaCheckBox()"
});
formatter.result({
  "duration": 284593300,
  "status": "passed"
});
formatter.after({
  "duration": 31120852600,
  "status": "passed"
});
formatter.uri("src/test/java/com/letskodit/learn/resources/featurefile/signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up functionality",
  "description": "As a user I want to sign up successfully in letskodit",
  "id": "sign-up-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 48390825300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should sign up successfully",
  "description": "",
  "id": "sign-up-functionality;user-should-sign-up-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter full name \"Pratiksha Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter Email address \"pratiksha_03@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"2810om\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter confirm password \"2810om\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on recaptcha check box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on agree to the terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 81900,
  "status": "passed"
});
formatter.match({
  "location": "SighUpStepdefs.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 800898000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pratiksha Patel",
      "offset": 19
    }
  ],
  "location": "SighUpStepdefs.iEnterFullName(String)"
});
formatter.result({
  "duration": 23399355200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pratiksha_03@yahoo.com",
      "offset": 23
    }
  ],
  "location": "SighUpStepdefs.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 860910600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2810om",
      "offset": 18
    }
  ],
  "location": "SighUpStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 363151400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2810om",
      "offset": 26
    }
  ],
  "location": "SighUpStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 374537300,
  "status": "passed"
});
formatter.match({
  "location": "SighUpStepdefs.iClickOnRecaptchaCheckBox()"
});
formatter.result({
  "duration": 22353833300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027g-recaptcha\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-97F9FNJ\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57547}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf048ddd33c965d4b5ae94853681e73a\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027g-recaptcha\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.letskodit.learn.utility.Utility.clickOnElement(Utility.java:36)\r\n\tat com.letskodit.learn.pages.SignUpPage.clickOnReCaptchaCheckBox(SignUpPage.java:69)\r\n\tat com.letskodit.learn.cucumber.stepdefs.SighUpStepdefs.iClickOnRecaptchaCheckBox(SighUpStepdefs.java:41)\r\n\tat ✽.And I click on recaptcha check box(src/test/java/com/letskodit/learn/resources/featurefile/signup.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SighUpStepdefs.iClickOnAgreeToTheTermsAndConditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SighUpStepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14639730800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-97F9FNJ\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57547}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf048ddd33c965d4b5ae94853681e73a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.letskodit.learn.utility.Utility.getScreenshot(Utility.java:231)\r\n\tat com.letskodit.learn.cucumber.Hooks.tearDown(Hooks.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
});