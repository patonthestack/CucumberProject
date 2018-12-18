#Author: patrick.p.tep.ctr@mail.mil
Feature: LoginFeature

  #Comment
  Scenario: Valid Login
    Given I open browser
    And I navigate to the FreeCrm
    When I enter "SyntaxTechnologies" and "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I close browser

  Scenario Outline: Invalid Login
    			Validating invalid login with invalid username and invalid password

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "<username>" and "<password>"
    And I click login button
    Then I still see sign up link
    And I close browser

    Examples: 
      | username | password |
      | Messi    | Messy123 |
      | Jessy    | Jessy123 |

  Scenario: Invalid Login
    			Validating invalid login with valid username and password

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "SyntaxTechnologies" and "Madrid"
    And I click login button
    Then I still see sign up link
    And I close browser
