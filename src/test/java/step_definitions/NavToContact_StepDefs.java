package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class NavToContact_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user clicks on Contact button in header")
    public void user_clicks_on_Contact_button_in_header() {
        landingPage.Contact_Header.click();
    }

    @Then("user is taken to Contact page")
    public void user_is_taken_to_Contact_page() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Contact";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));

        Driver.getDriver().quit();
    }

}
