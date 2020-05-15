package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.DataProvider;
import pages.RedSquare.LandingPage;
import utilities.Driver;

public class HoverAboutMenu_StepDefs {

    LandingPage landingPage = new LandingPage();

    @When("user hovers over on About menu")
    public void user_hovers_over_on_About_menu() {
        Actions hoverAbout = new Actions(Driver.getDriver());
        hoverAbout.moveToElement(landingPage.About_Header).build().perform();
    }

    @When("click on FAQ")
    public void click_on_FAQ() {

    }

    @Then("FAQ page opens")
    public void faq_page_opens() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user navigates to home page")
    public void user_navigates_to_home_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user clicks on Testimonials")
    public void user_clicks_on_Testimonials() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("Testimonials page opens")
    public void testimonials_page_opens() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user clicks on WallOfFame")
    public void user_clicks_on_WallOfFame() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("WallOfFame page opens")
    public void walloffame_page_opens() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }
}
