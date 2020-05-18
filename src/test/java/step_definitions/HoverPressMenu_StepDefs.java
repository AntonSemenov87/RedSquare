package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class HoverPressMenu_StepDefs {

    LandingPage landingPage = new LandingPage();

    Actions hoverAmenities = new Actions(Driver.getDriver());

    @When("user hovers over on Press menu")
    public void user_hovers_over_on_Press_menu() {
        hoverAmenities.moveToElement(landingPage.Press_Header).build().perform();
    }

    @Then("click on Digital")
    public void click_on_Digital() {
        landingPage.Digital.click();
    }

    @Then("Digital page opens")
    public void digital_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Press";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user clicks on Media")
    public void user_clicks_on_Media() {
        landingPage.Media.click();
    }

    @Then("Media page opens")
    public void media_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Media";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }



}
