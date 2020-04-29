$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/barclays/resources/featurefile/bankmanu.feature");
formatter.feature({
  "line": 1,
  "name": "Bank menu functionality",
  "description": "As a user I want to go in bank menu and view details in Barclays",
  "id": "bank-menu-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 36318460200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able navigate to bank menu and view details",
  "description": "",
  "id": "bank-menu-functionality;user-should-be-able-navigate-to-bank-menu-and-view-details",
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
  "name": "I mouse hover on bank",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover and click on switching bank account to Barclays",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on new to us button",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1252002800,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepdefs.iMouseHoverOnBank()"
});
formatter.result({
  "duration": 975401800,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepdefs.iMouseHoverAndClickOnSwitchingBankAccountToBarclays()"
});
formatter.result({
  "duration": 15407285700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepdefs.iClickOnNewToUsButton()"
});
formatter.result({
  "duration": 674877600,
  "status": "passed"
});
formatter.after({
  "duration": 1249928600,
  "status": "passed"
});
});