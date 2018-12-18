$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: patrick.p.tep.ctr@mail.mil"
    }
  ],
  "line": 2,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Comment"
    }
  ],
  "line": 5,
  "name": "Valid Login",
  "description": "",
  "id": "loginfeature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"SyntaxTechnologies\" and \"Syntax2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3914494984,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 1098222588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 9
    },
    {
      "val": "Syntax2017",
      "offset": 34
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 722834304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 7017816781,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 1061011090,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 683484733,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Invalid Login",
  "description": "\t\t\tValidating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "loginfeature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "loginfeature;invalid-login;;1"
    },
    {
      "cells": [
        "Messi",
        "Messy123"
      ],
      "line": 25,
      "id": "loginfeature;invalid-login;;2"
    },
    {
      "cells": [
        "Jessy",
        "Jessy123"
      ],
      "line": 26,
      "id": "loginfeature;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Login",
  "description": "\t\t\tValidating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Messi\" and \"Messy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3153538595,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 973599204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 9
    },
    {
      "val": "Messy123",
      "offset": 21
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 850379806,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 5485010521,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_still_see_sign_up_link()"
});
formatter.result({
  "duration": 41113855,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 678951130,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Invalid Login",
  "description": "\t\t\tValidating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Jessy\" and \"Jessy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3179449637,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 1018678866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jessy",
      "offset": 9
    },
    {
      "val": "Jessy123",
      "offset": 21
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 781717897,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 5455825454,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_still_see_sign_up_link()"
});
formatter.result({
  "duration": 43451037,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 689784442,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid Login",
  "description": "\t\t\tValidating invalid login with valid username and password",
  "id": "loginfeature;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter \"SyntaxTechnologies\" and \"Madrid\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3173884377,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 986569858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 9
    },
    {
      "val": "Madrid",
      "offset": 34
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 1118481579,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 5443250103,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_still_see_sign_up_link()"
});
formatter.result({
  "duration": 33927992,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 681914091,
  "status": "passed"
});
formatter.uri("SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "SignUp",
  "description": "",
  "id": "signup",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "SignUp without keyword example",
  "description": "",
  "id": "signup;signup-without-keyword-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on SignUp",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cfirtName\u003e\" and \"\u003clastName\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I check conditions and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comapny information \"\u003ccompany\u003e\" and \"\u003cphone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Complete Registeration",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "signup;signup-without-keyword-example;",
  "rows": [
    {
      "cells": [
        "firtName",
        "lastName",
        "email",
        "userName",
        "password",
        "company",
        "phone"
      ],
      "line": 16,
      "id": "signup;signup-without-keyword-example;;1"
    },
    {
      "cells": [
        "John",
        "Doe",
        "jdoe@gmail.com",
        "jdoe1",
        "jdoe123",
        "Syntax",
        "1234567890"
      ],
      "line": 17,
      "id": "signup;signup-without-keyword-example;;2"
    },
    {
      "cells": [
        "Jammes",
        "Doe",
        "jdoe@gmail.com",
        "jdoe2",
        "jdoe123",
        "Syntax",
        "1234567890"
      ],
      "line": 18,
      "id": "signup;signup-without-keyword-example;;3"
    },
    {
      "cells": [
        "Johnny",
        "Doe",
        "jdoe@gmail.com",
        "jdoe3",
        "jdoe123",
        "Syntax",
        "1234567890"
      ],
      "line": 19,
      "id": "signup;signup-without-keyword-example;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "SignUp without keyword example",
  "description": "",
  "id": "signup;signup-without-keyword-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on SignUp",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"John\" and \"Doe\" and \"jdoe@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"jdoe1\" and \"jdoe123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I check conditions and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comapny information \"Syntax\" and \"1234567890\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Complete Registeration",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3170051310,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "John\" and \"Doe",
      "offset": 9
    },
    {
      "val": "jdoe@gmail.com",
      "offset": 30
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "SignUp without keyword example",
  "description": "",
  "id": "signup;signup-without-keyword-example;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on SignUp",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Jammes\" and \"Doe\" and \"jdoe@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"jdoe2\" and \"jdoe123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I check conditions and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comapny information \"Syntax\" and \"1234567890\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Complete Registeration",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3152897136,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Jammes\" and \"Doe",
      "offset": 9
    },
    {
      "val": "jdoe@gmail.com",
      "offset": 32
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "SignUp without keyword example",
  "description": "",
  "id": "signup;signup-without-keyword-example;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on SignUp",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Johnny\" and \"Doe\" and \"jdoe@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"jdoe3\" and \"jdoe123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I check conditions and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comapny information \"Syntax\" and \"1234567890\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Complete Registeration",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3324333106,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnny\" and \"Doe",
      "offset": 9
    },
    {
      "val": "jdoe@gmail.com",
      "offset": 32
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});