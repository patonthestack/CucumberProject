package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testUtils.BaseClass;

public class SignUpSteps extends BaseClass {

    @Given("^I click on SignUp$")
	public void i_click_on_SignUp() throws Throwable {
    	Thread.sleep(2000);
		driver.findElement(By.linkText("Sign Up")).click();
	}
    
    @When("^I enter \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void i_enter_and(String firstName, String lastName, String email) throws Throwable {
    	driver.findElement(By.name("first_name")).sendKeys(firstName);
    	driver.findElement(By.name("surname")).sendKeys(lastName);
    	driver.findElement(By.name("email")).sendKeys(email);
	}

	@When("^I enter credentials \"(.*)\" and \"(.*)\"$")
	public void i_enter_credentials_and(String uName, String pwd) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(uName);
        driver.findElement(By.name("password")).sendKeys(pwd);
	}

	@When("^I check conditions and click submit$")
	public void i_check_conditions_and_click_submit() throws Throwable {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@value='false']")).click();
		Thread.sleep(500);
		driver.findElement(By.xpath("//div[@class='myButton']")).click();
	}

	@Then("^I enter company information \"(.*)\" and \"(.*)\"$")
	public void i_enter_company_information_and(String compName, String compNumber) throws Throwable {
		driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(compName);
		driver.findElement(By.xpath("//input[@id='phone']")).sendKeys(compNumber);
	}

	@Then("^I click on continue$")
	public void i_click_on_continue() throws Throwable {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@name='btnSubmit']")).click();
	}
	
	@Then("^I click on Complete Registration")
	public void i_click_on_Complete_Registration() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@name='finish']")).click();
	}
	
	@When("^I Provide the following details$")
    public void i_Provide_the_following_details(DataTable signDetails) throws InterruptedException {
        List<Map<String, String>> maps = signDetails.asMaps(String.class, String.class);

        for (Map<String, String> map : maps) {
            Thread.sleep(4000);
            driver.findElement(By.linkText("Sign Up")).click();
            Thread.sleep(2000);
            WebElement drop = driver.findElement(By.xpath("//select[@id='payment_plan_id']"));
            Select dd = new Select(drop);
            dd.selectByVisibleText(map.get("Edition"));
            driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(map.get("FirstName"));
            driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(map.get("LastName"));
            driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys(map.get("Email"));
            driver.findElement(By.xpath("//input[@placeholder='Confirm Email']")).sendKeys(map.get("ConfirmEmail"));
            driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(map.get("UserName"));
            driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(map.get("Password"));
            driver.findElement(By.xpath("//input[@placeholder='Confirm Password']")).sendKeys(map.get("ConfirmPassword"));
            Thread.sleep(1000);
            
            driver.findElement(By.xpath("//input[@value='false']")).click();
            Thread.sleep(500);
            driver.findElement(By.xpath("//div[@class='myButton']")).click();
            Thread.sleep(2000);
            driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(map.get("Company"));
            driver.findElement(By.xpath("//input[@id='phone']")).sendKeys(map.get("Phone"));
            Thread.sleep(1000);
            driver.findElement(By.xpath("//button[@name='btnSubmit']")).click();
            Thread.sleep(1000);
            driver.findElement(By.xpath("//button[@name='finish']")).click();

            boolean verificationText = driver.findElement(By.xpath("//div[contains(text(), 'Your account is now registered')]")).isDisplayed();
            Assert.assertTrue(verificationText);
        }
    }

}
