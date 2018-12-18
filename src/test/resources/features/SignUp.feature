Feature: SignUp

 Scenario Outline: SignUp without keyword example
   Given I open browser
   And I navigate to the FreeCrm
   And I click on SignUp
   When I enter "<firstName>" and "<lastName>" and "<email>"
   And I enter credentials "<userName>" and "<password>"
   And I check conditions and click submit
   Then I enter company information "<company>" and "<phone>"
   And I click on continue
   Then I click on Complete Registration
   Then I close browser

   Examples:
     | firstName | lastName | email          | userName | password | company | phone      |
     | John     | Doe      | jdoe@gmail.com | jdoe1    | jdoe123  | Syntax  | 1234567890 |
     | Jammes   | Doe      | jdoe@gmail.com | jdoe2    | jdoe123  | Syntax  | 1234567890 |
     | Johnny   | Doe      | jdoe@gmail.com | jdoe3    | jdoe123  | Syntax  | 1234567890 |