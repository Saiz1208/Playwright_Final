Feature: HRMS
@TC002
Scenario: Login and Logout 
Given Launch browser
When Enter url
When login into application
When logout from application
Then Close browser