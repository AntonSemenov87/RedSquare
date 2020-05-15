$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/HoverAmenitiesMenu.feature");
formatter.feature({
  "name": "Verification of pages opening when hover over Amenities menu and click on each",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of pages open when hover over Amenities and click on items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke1"
    }
  ]
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers over on Amenities menu",
  "keyword": "When "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.user_hovers_over_on_Amenities_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Restaurant",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.click_on_Restaurant()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Restaurant page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.restaurant_page_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to home page",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAboutMenu_StepDefs.user_navigates_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sauna",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.user_clicks_on_Sauna()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Antons-MacBook-Pro.local\u0027, ip: \u00272601:241:8d00:918:f488:712a:dfbd:4069%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: /var/folders/zl/bxxc_6kx405...}, goog:chromeOptions: {debuggerAddress: localhost:50518}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8ea567dbd7bb3e53b835c4e796e32b48\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\n\tat step_definitions.HoverAmenitiesMenu_StepDefs.user_clicks_on_Sauna(HoverAmenitiesMenu_StepDefs.java:38)\n\tat ✽.user clicks on Sauna(src/test/resources/features/HoverAmenitiesMenu.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "Sauna page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.sauna_page_opens()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to home page",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAboutMenu_StepDefs.user_navigates_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Spa Services",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.user_clicks_on_Spa_Services()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Spa Services page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.spa_Services_page_opens()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to home page",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAboutMenu_StepDefs.user_navigates_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Tanning",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.user_clicks_on_Tanning()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tanning page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.tanning_page_opens()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to home page",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAboutMenu_StepDefs.user_navigates_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Massage",
  "keyword": "And "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.user_clicks_on_Massage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Massage page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAmenitiesMenu_StepDefs.massage_page_opens()"
});
formatter.result({
  "status": "skipped"
});
});