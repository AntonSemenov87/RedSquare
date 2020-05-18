package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import pages.RedSquare.LandingPage;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class HoverAmenitiesMenu_StepDefs {

    LandingPage landingPage = new LandingPage();

    Actions hoverAmenities = new Actions(Driver.getDriver());

    @When("user hovers over on Amenities menu")
    public void user_hovers_over_on_Amenities_menu() {
        hoverAmenities.moveToElement(landingPage.Amenities_Header).build().perform();
    }

    @When("click on Restaurant")
    public void click_on_Restaurant() {
        landingPage.Restaurant.click();
    }

    @Then("Restaurant page opens")
    public void restaurant_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Restaurant";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));

    }

    @Then("user clicks on Sauna")
    public void user_clicks_on_Sauna() {
        hoverAmenities.moveToElement(landingPage.Amenities_Header).build().perform();
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 7);
        wait.until(ExpectedConditions.visibilityOf(landingPage.Sauna));
        landingPage.Sauna.click();
    }

    @Then("Sauna page opens")
    public void sauna_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Sauna";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user clicks on Spa Services")
    public void user_clicks_on_Spa_Services() {
        landingPage.SpaServices.click();
    }

    @Then("Spa Services page opens")
    public void spa_Services_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Spa Services";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user clicks on Tanning")
    public void user_clicks_on_Tanning() {
        landingPage.Tanning.click();
    }

    @Then("Tanning page opens")
    public void tanning_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Tanning";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user clicks on Massage")
    public void user_clicks_on_Massage() {
        landingPage.Massage.click();
    }

    @Then("Massage page opens")
    public void massage_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Massage";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }


}
