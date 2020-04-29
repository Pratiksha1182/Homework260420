$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/contactsales.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Sales functionality",
  "description": "As a user I want to submit contact details in orangehrm",
  "id": "contact-sales-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 24875393700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should submit contact details successfully",
  "description": "",
  "id": "contact-sales-functionality;user-should-submit-contact-details-successfully",
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
  "name": "I click on contact sales button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to contact sales page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSalesStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1042316800,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iClickOnContactContactSalesButton()"
});
formatter.result({
  "duration": 5356771500,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iShouldNavigateToContactSalesPage()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.after({
  "duration": 2619754600,
  "status": "passed"
});
formatter.before({
  "duration": 26287336400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should submit contact details successfully",
  "description": "",
  "id": "contact-sales-functionality;user-should-submit-contact-details-successfully",
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
  "name": "I click on contact sales button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Pratiksha\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter company name \"PBS Limited\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select number employees \"101 - 150\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter phone number \"07495172051\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter job title \"Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"patty_appu@yahoo.co.uk\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select country name \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter comment \"None\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSalesStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iClickOnContactContactSalesButton()"
});
formatter.result({
  "duration": 1449852600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pratiksha",
      "offset": 20
    }
  ],
  "location": "ContactSalesStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 4237984800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "ContactSalesStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 409137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PBS Limited",
      "offset": 22
    }
  ],
  "location": "ContactSalesStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 1289637800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101 - 150",
      "offset": 27
    }
  ],
  "location": "ContactSalesStepdefs.iSelectNumberEmployees(String)"
});
formatter.result({
  "duration": 2428034400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07495172051",
      "offset": 22
    }
  ],
  "location": "ContactSalesStepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 400288600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "ContactSalesStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 374952400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patty_appu@yahoo.co.uk",
      "offset": 9
    }
  ],
  "location": "ContactSalesStepdefs.iEnter(String)"
});
formatter.result({
  "duration": 684931700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 23
    }
  ],
  "location": "ContactSalesStepdefs.iSelectCountryName(String)"
});
formatter.result({
  "duration": 375919200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "None",
      "offset": 17
    }
  ],
  "location": "ContactSalesStepdefs.iEnterComment(String)"
});
formatter.result({
  "duration": 504300500,
  "status": "passed"
});
formatter.after({
  "duration": 1609959800,
  "status": "passed"
});
});