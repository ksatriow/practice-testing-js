const { When, Then, After, Before, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const webdriver = require("selenium-webdriver");
const {By} = require("selenium-webdriver");

let driver;
let multiply = 0;

// Synchronous
Before(function () {
  driver = new webdriver.Builder().forBrowser("firefox").build();
});

// Asynchronous Promise
After(function () {
  driver.quit();
});

When("I multiply {int} and {int}", function (number1, number2) {
  multiply = number1 * number2;
});

Then("the result should be {int}", function (result) {
  expect(multiply).equal(result);
});

Given("I visit github homepage", async () => {
    await driver.get("https://google.com/");
});

When("I search ksatriow on github", {timeout: 60 * 1000}, async () => {
  await driver.findElement(By.name('q')).sendKeys('ksatriow' + '\n');
});

Then("I should see the result", async () => {
  let result = await driver.findElement(By.id('search')).getText();
  console.log(result);
});
