package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.RedSquare.LandingPage;
import utilities.Config;
import utilities.Driver;

public class NavToAbout_StepDefs {
    LandingPage landingPage = new LandingPage();

    @Given("user is on landing page")
    public void user_is_on_landing_page() {
        Driver.getDriver().get(Config.getProperty("redsquareURL"));
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 5);
        wait.until(ExpectedConditions.visibilityOf(landingPage.About_Header));
        //Thread.sleep(5000);
    }

    @When("user clicks on About button in header")
    public void user_clicks_on_About_button_in_header() {
       landingPage.About_Header.click();

    }

    @Then("user is taken to About page")
    public void user_is_taken_to_About_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "About";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));

    }

    @When("user return to landing page")
    public void user_return_to_landing_page() {
        Driver.getDriver().get(Config.getProperty("redsquareURL"));

    }

    @When("user clicks on About button in footer")
    public void user_clicks_on_About_button_in_footer() {
        landingPage.About_Footer.click();

    }

    @Then("user is taken to About page again")
    public void user_is_taken_to_About_page_again() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "About";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }



}
