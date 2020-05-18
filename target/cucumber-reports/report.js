$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/HoverPressMenu.feature");
formatter.feature({
  "name": "Verification of pages opening when hover over Press menu and click on each",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of pages open when hover over Press and click on items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke2"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on MAC (b1ba32a50924af20a04549c3e8608580)] -\u003e xpath: (//a[.\u003d\u0027About\u0027])[1]] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Antons-MacBook-Pro.local\u0027, ip: \u00272601:241:8d00:918:ad99:3bc:47d3:245f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: /var/folders/zl/bxxc_6kx405...}, goog:chromeOptions: {debuggerAddress: localhost:63312}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b1ba32a50924af20a04549c3e8608580\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat step_definitions.NavToAbout_StepDefs.user_is_on_landing_page(NavToAbout_StepDefs.java:22)\n\tat ✽.user is on landing page(src/test/resources/features/HoverPressMenu.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "user hovers over on Press menu",
  "keyword": "When "
});
formatter.match({
  "location": "HoverPressMenu_StepDefs.user_hovers_over_on_Press_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Digital",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverPressMenu_StepDefs.click_on_Digital()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Digital page opens",
  "keyword": "And "
});
formatter.match({
  "location": "HoverPressMenu_StepDefs.digital_page_opens()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverAboutMenu_StepDefs.user_navigates_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Media",
  "keyword": "And "
});
formatter.match({
  "location": "HoverPressMenu_StepDefs.user_clicks_on_Media()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Media page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HoverPressMenu_StepDefs.media_page_opens()"
});
formatter.result({
  "status": "skipped"
});
});