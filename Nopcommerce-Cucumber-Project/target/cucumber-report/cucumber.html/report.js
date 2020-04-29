$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/books.feature");
formatter.feature({
  "line": 1,
  "name": "Books functionality",
  "description": "As a user I want to add a book to the shopping cart",
  "id": "books-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 36728060100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should add a book to cart",
  "description": "",
  "id": "books-functionality;user-should-add-a-book-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I click on books tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click on position sort by and select \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on Ray Beadbury book",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on add to cart btn",
  "keyword": "Then "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooksTab()"
});
formatter.result({
  "duration": 4400727600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 40
    }
  ],
  "location": "BooksStepdefs.iClickOnPositionSortByAndSelect(String)"
});
formatter.result({
  "duration": 10547348000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Name: A to Z\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-97F9FNJ\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat com.demo.nopcommerce.utility.Utility.selectByValueFromDropDown(Utility.java:132)\r\n\tat com.demo.nopcommerce.pages.BooksPage.positionSortByAtoZ(BooksPage.java:24)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.BooksStepdefs.iClickOnPositionSortByAndSelect(BooksStepdefs.java:18)\r\n\tat ✽.And I click on position sort by and select \"Name: A to Z\"(src/test/java/com/demo/nopcommerce/resources/featurefile/books.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BooksStepdefs.iClickOnRayBeadburyBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksStepdefs.iClickOnAddToCartBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3820685900,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers functionality",
  "description": "As a user I want add product to the shopping cart",
  "id": "computers-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17160676800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to computers page successfully",
  "description": "",
  "id": "computers-functionality;user-should-navigate-to-computers-page-successfully",
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
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 112300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 5020911800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.after({
  "duration": 951958700,
  "status": "passed"
});
formatter.before({
  "duration": 15692514700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should add product to the cart successfully",
  "description": "",
  "id": "computers-functionality;user-should-add-product-to-the-cart-successfully",
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
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on desktop and click",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on hdd radio button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 941088200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnDesktopAndClick()"
});
formatter.result({
  "duration": 1048213200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 11881096200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnHddRadioButton()"
});
formatter.result({
  "duration": 14314637800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 253001600,
  "status": "passed"
});
formatter.after({
  "duration": 879491600,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "As a user I want to login into nope commerce website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14708904800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully",
  "description": "",
  "id": "login-feature;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1685917800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 289418200,
  "status": "passed"
});
formatter.after({
  "duration": 766226200,
  "status": "passed"
});
formatter.before({
  "duration": 13573645100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
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
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"xyz12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1485966600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz12@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 534118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 235020800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12421709600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.after({
  "duration": 828598000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get an error message \"\u003cLogin was unsuccessful\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc123@gmail.com",
        "xyz123"
      ],
      "line": 26,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcde@gmail.com",
        "abc12"
      ],
      "line": 27,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17917224900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"abc123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get an error message \"\u003cLogin was unsuccessful\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3917788700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1219523700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 280144500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2067781000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLogin was unsuccessful\u003e",
      "offset": 31
    }
  ],
  "location": "LoginStepDefs.iShouldGetAnErrorMessage(String)"
});
formatter.result({
  "duration": 134000,
  "status": "passed"
});
formatter.after({
  "duration": 1221713500,
  "status": "passed"
});
formatter.before({
  "duration": 14152019000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"abcde@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"abc12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get an error message \"\u003cLogin was unsuccessful\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 83600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1489221400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcde@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepDefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 171923000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 197030800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 158968800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLogin was unsuccessful\u003e",
      "offset": 31
    }
  ],
  "location": "LoginStepDefs.iShouldGetAnErrorMessage(String)"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.after({
  "duration": 819060500,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Register Functionality",
  "description": "As a user I want to register on nopCommerce",
  "id": "register-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13716266000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-functionality;user-should-navigate-to-register-page-successfully",
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
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1489508100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefs.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.after({
  "duration": 1189887200,
  "status": "passed"
});
formatter.before({
  "duration": 12531740200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should register successfully",
  "description": "",
  "id": "register-functionality;user-should-register-successfully",
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
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on female radio button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter first name \"Pratiksha\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter emailId \"abc1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter company name \"PBS Limited\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Password \"2810om\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter confirm password \"2810om\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should get registration complition message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1670437100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefs.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 258493200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pratiksha",
      "offset": 20
    }
  ],
  "location": "RegisterStepDefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 609583700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegisterStepDefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 176006800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterStepDefs.iEnterEmailId(String)"
});
formatter.result({
  "duration": 405796000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PBS Limited",
      "offset": 22
    }
  ],
  "location": "RegisterStepDefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 219862500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2810om",
      "offset": 18
    }
  ],
  "location": "RegisterStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 259953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2810om",
      "offset": 26
    }
  ],
  "location": "RegisterStepDefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 172913900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 12085744400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 46
    }
  ],
  "location": "RegisterStepDefs.iShouldGetRegistrationComplitionMessage()"
});
formatter.result({
  "duration": 937900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.demo.nopcommerce.cucumber.stepdefs.RegisterStepDefs.iShouldGetRegistrationComplitionMessage() in file:/C:/Users/Admin/IdeaProjects/HOMEWORK%2026-04-20/Nopcommerce-Cucumber-Project/target/test-classes/\u0027 with pattern [^I should get registration complition message \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Your registration completed]. \nStep: Then I should get registration complition message \"Your registration completed\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1391644400,
  "status": "passed"
});
});