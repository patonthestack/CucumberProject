#Author: patrick.p.tep.ctr@mail.mil
Feature: SignUpWithDT

  Scenario: Sign Up to the FreeCRM
    Given I open browser
    And I navigate to the FreeCrm
    When I Provide the following details
      | Edition      | FirstName | LastName | Email         | ConfirmEmail  | UserName       | Password | ConfirmPassword | Company | Phone      |
      | Free Edition | John      | Doe      | jdoeee@test.com | jdoeee@test.com | jdoeee123456     | test123  | test123         | Syntax  | 1234567890 |
      | Free Edition | John      | Doe      | jdoeaaa@test.com | jdoeaaa@test.com | jdoeaaa1234567    | test123  | test123         | Syntax  | 1234567890 |
      | Free Edition | Jane      | Doe      | jdoebbb@test.com | jdoebbb@test.com | janedoebbb1234567 | test123  | test123         | Syntax  | 1234567890 |
    Then I close browser
