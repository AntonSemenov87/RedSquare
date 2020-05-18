package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

import java.util.Iterator;
import java.util.Set;

public class NavToInstagram_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user clicks on Instagram button in header")
    public void user_clicks_on_Instagram_button_in_header() {
        landingPage.Instagram_Header.click();
    }

    @Then("user is taken to Instagram page")
    public void user_is_taken_to_Instagram_page() {
        Set <String> ids = Driver.getDriver().getWindowHandles();
        Iterator<String> iterator = ids.iterator();
        String parentID = iterator.next();
        String childID = iterator.next();
        Driver.getDriver().switchTo().window(childID);

        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "RedSquareSpa (@redsquarespa_chicago) • Instagram photos and videos";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));

        Driver.getDriver().close();
        Driver.getDriver().switchTo().window(parentID);


        //Driver.getDriver().quit();
    }

}
