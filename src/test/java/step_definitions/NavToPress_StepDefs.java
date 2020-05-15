package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class NavToPress_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user clicks on Press button in header")
    public void user_clicks_on_Press_button_in_header() {
        landingPage.Press_Header.click();
    }

    @Then("user is taken to Press page")
    public void user_is_taken_to_Press_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Press";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }
}
