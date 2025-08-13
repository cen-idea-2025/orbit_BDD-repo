Feature: Searching for various courses onboard software

    As a user who is logged into the system
    I want to search for various courses onboard software
    So that I can find the course I need and enroll in it


Scenario: Searching for a course by name
Given I am logged in
When I search for a course by name 
Then I should see the courses that I searched for