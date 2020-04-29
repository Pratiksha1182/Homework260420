package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BooksPage extends Utility {

    private static final Logger log = LogManager.getLogger(BooksPage.class.getName());
@FindBy(id = "products-orderby")
    WebElement _sortByAtoZ;
@FindBy(xpath = "//a[contains(text(),'Fahrenheit 451 by Ray Bradbury')]")
    WebElement _rayBeadbury;
@FindBy(className = "button-2 product-box-add-to-cart-button")
    WebElement _addToCart;


    public void positionSortByAtoZ(String SortBy){
        Reporter.addStepLog("Sorting products by A to Z" + SortBy + "selecting A to Z"+ _sortByAtoZ.toString());

        selectByValueFromDropDown(_sortByAtoZ,SortBy);
        clickOnElement(_sortByAtoZ);
        log.info("Sorting products by A to Z" + SortBy + "selecting A to Z"+ _sortByAtoZ.toString());

    }
    public void SelectBook(){
        Reporter.addStepLog("Clicking on book RayBeadbury" + _rayBeadbury.toString());
    clickOnElement(_rayBeadbury);
    log.info("Clicking on book RayBeadbury" + _rayBeadbury.toString());
    }

    public void addToCartBtn(){
        Reporter.addStepLog("Clicking on add to cart" + _addToCart.toString());
      clickOnElement(_addToCart);
      log.info("Clicking on add to cart" + _addToCart.toString());
    }
    public void userShouldAddBookToTheCart(String SortBy){
        positionSortByAtoZ(SortBy);
        SelectBook();
        addToCartBtn();


    }
}

