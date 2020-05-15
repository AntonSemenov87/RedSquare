$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/NavToTwitter.feature");
formatter.feature({
  "name": "Navigation to Twitter page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Twitter verification page for header",
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
  "name": "user clicks on Twitter button in header",
  "keyword": "When "
});
formatter.match({
  "location": "NavToTwitter_StepDefs.user_clicks_on_Twitter_button_in_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken to Twitter page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavToTwitter_StepDefs.user_is_taken_to_Twitter_page()"
});
formatter.result({
  "status": "passed"
});
});