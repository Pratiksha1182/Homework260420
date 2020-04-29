$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/flight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Search Feature",
  "description": "\r\nAs a user, I want to find search flights between cities",
  "id": "flight-search-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28652174400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"Ahmedabad\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"01/07/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"19/07/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 590861200,
  "status": "passed"
});
formatter.match({
  "location": "FlightStepdefs.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1271778600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "FlightStepdefs.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1438266700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 26
    }
  ],
  "location": "FlightStepdefs.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 879843200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/07/2020",
      "offset": 33
    }
  ],
  "location": "FlightStepdefs.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 909220300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/07/2020",
      "offset": 28
    }
  ],
  "location": "FlightStepdefs.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 698599500,
  "status": "passed"
});
formatter.match({
  "location": "FlightStepdefs.iAddNoTravellers()"
});
formatter.result({
  "duration": 1407214000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" data-control\u003d\"menu\" data-auto-pos\u003d\"true\" class\u003d\"trigger-utility menu-trigger btn-utility btn-secondary dropdown-toggle theme-standard pin-left menu-arrow gcw-component gcw-traveler-amount-select gcw-component-initialized\" data-gcw-component\u003d\"gcw-traveler-amount-select\" aria-expanded\u003d\"false\" data-gcw-single-room\u003d\"true\"\u003e...\u003c/button\u003e is not clickable at point (731, 475). Other element would receive the click: \u003cdiv\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d81.0.4044.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-97F9FNJ\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55116}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 263d055bd2e2d1433aa134193343c624\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat uk.co.expedia.utility.Utility.clickOnElement(Utility.java:43)\r\n\tat uk.co.expedia.pages.FlightsPage.clickOnTravellers(FlightsPage.java:88)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightStepdefs.iAddNoTravellers(FlightStepdefs.java:42)\r\n\tat ✽.And I add no travellers(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FlightStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightStepdefs.iMustSeeFlightsToTheSameDestination()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1393008100,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "\r\nAs a user, I want to login in to expedia.co.uk successfully",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20044164400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on account tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Email \"pattypratiksha@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password \"jay1ambe\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 1369036000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 649230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pattypratiksha@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 2995934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay1ambe",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 12589843300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 351595300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.after({
  "duration": 1347573300,
  "status": "passed"
});
formatter.before({
  "duration": 22481154900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should Not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on account tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter valid Email \"pratikshapatel1182@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter invalid password \"qwerjjr\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should Not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 309356500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 643179400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pratikshapatel1182@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 10600055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerjjr",
      "offset": 26
    }
  ],
  "location": "LoginStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 483402700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 313866600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.after({
  "duration": 1543503400,
  "status": "passed"
});
});