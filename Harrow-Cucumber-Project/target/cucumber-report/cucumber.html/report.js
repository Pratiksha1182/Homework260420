$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/benefits.feature");
formatter.feature({
  "line": 1,
  "name": "Benefits functionality",
  "description": "As a user I want to apply for housing benefits",
  "id": "benefits-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21387617600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to navigate to benefits page",
  "description": "",
  "id": "benefits-functionality;user-should-be-able-to-navigate-to-benefits-page",
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
  "name": "I click on service button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on benefits and click",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I am on benefits page",
  "keyword": "Then "
});
formatter.match({
  "location": "BenefitsStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 169967200,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnServiceButton()"
});
formatter.result({
  "duration": 324534100,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iMouseHoverOnBenefitsAndClick()"
});
formatter.result({
  "duration": 479078000,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iAmOnBenefitsPage()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.after({
  "duration": 1453067400,
  "status": "passed"
});
formatter.before({
  "duration": 26810404700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to apply for housing benefits",
  "description": "",
  "id": "benefits-functionality;user-should-be-able-to-apply-for-housing-benefits",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on service button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I mouse hover on benefits and click",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on apply for housing benefits",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on entitlement calculator button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on mortgage or owned outright",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter postcode \"AL10 8PW\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on next button",
  "keyword": "Then "
});
formatter.match({
  "location": "BenefitsStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 75100,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnServiceButton()"
});
formatter.result({
  "duration": 2172999900,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iMouseHoverOnBenefitsAndClick()"
});
formatter.result({
  "duration": 2698917000,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnApplyForHousingBenefits()"
});
formatter.result({
  "duration": 12232819800,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnEntitlementCalculatorButton()"
});
formatter.result({
  "duration": 14933358700,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnStartButton()"
});
formatter.result({
  "duration": 12783272800,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnMortgageOrOwnedOutright()"
});
formatter.result({
  "duration": 335223200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AL10 8PW",
      "offset": 18
    }
  ],
  "location": "BenefitsStepdefs.iEnterPostcode(String)"
});
formatter.result({
  "duration": 4277169500,
  "status": "passed"
});
formatter.match({
  "location": "BenefitsStepdefs.iClickOnNextButton()"
});
formatter.result({
  "duration": 3833177100,
  "status": "passed"
});
formatter.after({
  "duration": 3629121700,
  "status": "passed"
});
});