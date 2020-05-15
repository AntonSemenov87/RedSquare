$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/NavToAbout.feature");
formatter.feature({
  "name": "Navigation to About page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "About verification page for header",
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
formatter.uri("src/test/resources/features/NavToAmenities.feature");
formatter.feature({
  "name": "Navigation to Amenities page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Amenities verification page for header",
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
  "name": "user clicks on Amenities button in header",
  "keyword": "When "
});
formatter.match({
  "location": "NavToAmenities_StepDefs.user_clicks_on_Amenities_button_in_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken to Amenities page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavToAmenities_StepDefs.user_is_taken_to_Amenities_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/NavToPress.feature");
formatter.feature({
  "name": "Navigation to Press page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Press verification page for header",
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
  "name": "user clicks on Press button in header",
  "keyword": "When "
});
formatter.match({
  "location": "NavToPress_StepDefs.user_clicks_on_Press_button_in_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is taken to Press page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavToPress_StepDefs.user_is_taken_to_Press_page()"
});
formatter.result({
  "status": "passed"
});
});