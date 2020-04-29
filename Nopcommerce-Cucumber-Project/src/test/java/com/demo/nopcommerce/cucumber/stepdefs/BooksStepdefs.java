package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.BooksPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BooksStepdefs {
    @When("^I click on books tab$")
    public void iClickOnBooksTab() {
        new HomePage().clickOnBooksTab();
    }

    @And("^I click on position sort by and select \"([^\"]*)\"$")
    public void iClickOnPositionSortByAndSelect(String SortBy) {
        new BooksPage().positionSortByAtoZ(SortBy);
    }

    @And("^I click on Ray Beadbury book$")
    public void iClickOnRayBeadburyBook() {
        new BooksPage().SelectBook();
    }

    @Then("^I click on add to cart btn$")
    public void iClickOnAddToCartBtn() {
        new BooksPage().addToCartBtn();
    }
}
