package pages.RedSquare;

import org.openqa.selenium.support.PageFactory;

public class LandingPage {
    public LandingPage () {
        PageFactory.initElements(Driver.getDriver(), this);
    }

}
