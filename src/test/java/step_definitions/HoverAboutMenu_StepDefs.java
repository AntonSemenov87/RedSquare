package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class HoverAboutMenu_StepDefs {

    LandingPage landingPage = new LandingPage();

    Actions hoverAbout = new Actions(Driver.getDriver());

    @When("user hovers over on About menu")
    public void user_hovers_over_on_About_menu() {

        hoverAbout.moveToElement(landingPage.About_Header).build().perform();
    }

    @When("click on FAQ")
    public void click_on_FAQ() {
        landingPage.FAQ.click();
    }

    @Then("FAQ page opens")
    public void faq_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "FAQ";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user navigates to home page")
    public void user_navigates_to_home_page() {
       Driver.getDriver().navigate().back();
    }

    @Then("user clicks on Testimonials")
    public void user_clicks_on_Testimonials() {
        hoverAbout.moveToElement(landingPage.About_Header).build().perform();
        landingPage.Testimonials.click();
    }

    @Then("Testimonials page opens")
    public void testimonials_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Testimonials";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }

    @Then("user clicks on WallOfFame")
    public void user_clicks_on_WallOfFame() {
        hoverAbout.moveToElement(landingPage.About_Header).build().perform();
        landingPage.WallOfFame.click();
    }

    @Then("WallOfFame page opens")
    public void walloffame_page_opens() {
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = "Wall of Fame";
        Assert.assertTrue(actualTitle.contains(expectedInTitle));
    }
}
