package pages.RedSquare;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LandingPage {
    public LandingPage () {
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "(//a[.='About'])[1]")
    public WebElement About_Header;

    @FindBy(xpath = "(//a[.='Amenities'])[1]")
    public WebElement Amenities_Header;

    @FindBy(xpath = "(//a[.='Press'])[1]")
    public WebElement Press_Header;

    @FindBy(xpath = "(//a[.='Promotions'])[1]")
    public WebElement Promotions_Header;

    @FindBy(xpath = "(//a[.='Gallery'])[1]")
    public WebElement Gallery_Header;

    @FindBy(xpath = "(//a[.='Contact'])[1]")
    public WebElement Contact_Header;

    @FindBy(xpath = "(//a[@href='https://www.facebook.com/RussianBath'])[1]")
    public WebElement Facebook_Header;

    @FindBy(xpath = "(//a[@href='https://www.instagram.com/redsquarespa_chicago/'])[1]")
    public WebElement Instagram_Header;

    @FindBy(xpath = "(//a[@href='https://twitter.com/RedSquareSpaChi'])[1]")
    public WebElement Twitter_Header;

    @FindBy(xpath = "(//a[@href='https://www.youtube.com/channel/UCOECVH65yYGVBiXFKy0qyng'])[1]")
    public WebElement YouTube_Header;

    @FindBy(xpath = "(//a[.='About'])[2]")
    public WebElement About_Footer;

    @FindBy(xpath = "(//a[.='Amenities'])[]")
    public WebElement Amenities_Footer;

    @FindBy(xpath = "(//a[.='Press'])[2]")
    public WebElement Press_Footer;

    @FindBy(xpath = "(//a[.='Promotions'])[2]")
    public WebElement Promotions_Footer;

    @FindBy(xpath = "(//a[.='Gallery'])[2]")
    public WebElement Gallery_Footer;

    @FindBy(xpath = "(//a[.='Contact'])[2]")
    public WebElement Contact_Footer;

    @FindBy(xpath = "(//a[@href='https://www.facebook.com/RussianBath'])[2]")
    public WebElement Facebook_Footer;

    @FindBy(xpath = "(//a[@href='https://www.instagram.com/redsquarespa_chicago/'])[2]")
    public WebElement Instagram_Footer;

    @FindBy(xpath = "(//a[@href='https://twitter.com/RedSquareSpaChi'])[2]")
    public WebElement Twitter_Footer;

    @FindBy(xpath = "(//a[@href='https://www.youtube.com/channel/UCOECVH65yYGVBiXFKy0qyng'])[2]")
    public WebElement YouTube_Footer;

}
