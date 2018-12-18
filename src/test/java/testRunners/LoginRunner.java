package testRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//features, glue, dryRun, plugin, strict, monochrome, tags
@CucumberOptions(features= {"src/test/resources\\features"}
		, glue= {"stepDefinition"}
		, monochrome = true
		, plugin = {"pretty", "html:test-output"}
		, dryRun = false)

public class LoginRunner {

	
}
