package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class NavToAmenities_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user clicks on Amenities button in header")
    public void user_clicks_on_Amenities_button_in_header() {
        landingPage.Amenities_Header.click();
    }

    @Then("user is taken to Amenities page")
    public void user_is_taken_to_Amenities_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Amenities";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }


}
