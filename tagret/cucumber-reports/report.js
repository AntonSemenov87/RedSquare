$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/NavToAbout.feature");
formatter.feature({
  "name": "Navigation to About page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "About verification page for header and footer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user clicks on About button in header",
  "keyword": "When "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_clicks_on_About_button_in_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken to About page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_is_taken_to_About_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user return to landing page",
  "keyword": "When "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_return_to_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on About button in footer",
  "keyword": "And "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_clicks_on_About_button_in_footer()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VITA\u0027, ip: \u002710.0.1.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Antho\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55418}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a9c0aa31b4595f049e844d8bc3b7d877\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat step_definitions.NavToAbout_StepDefs.user_clicks_on_About_button_in_footer(NavToAbout_StepDefs.java:47)\r\n\tat ✽.user clicks on About button in footer(src/test/resources/features/NavToAbout.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is taken to About page again",
  "keyword": "Then "
});
formatter.match({
  "location": "NavToAbout_StepDefs.user_is_taken_to_About_page_again()"
});
formatter.result({
  "status": "skipped"
});
});