package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class NavToPromotions_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user clicks on Promotions button in header")
    public void user_clicks_on_Promotions_button_in_header() {
       landingPage.Promotions_Header.click();
    }

    @Then("user is taken to Promotions page")
    public void user_is_taken_to_Promotions_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Promotions";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

}
