package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.RedSquare.LandingPage;
import utilities.Config;
import utilities.Driver;

public class NavToGallery_StepDefs {
    LandingPage landingPage = new LandingPage();

    @When("user clicks on Gallery button in header")
    public void user_clicks_on_Gallery_button_in_header() {
        landingPage.Gallery_Header.click();
    }

    @Then("user is taken to Gallery page")
    public void user_is_taken_to_Gallery_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Gallery";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));

    }

}
