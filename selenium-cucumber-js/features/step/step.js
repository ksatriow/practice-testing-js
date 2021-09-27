const { When, Then, After, Before, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { By } = require("selenium-webdriver");
const { initDriver } = require('../utils/driverUtils');
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

let driver;
let multiply = 0;

// Synchronous
Before(function () {
  driver = initDriver();
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

When("I search ksatriow on github", async () => {
  await driver.findElement(By.name('q')).sendKeys('ksatriow' + '\n');
});

Then("I should see the result", async () => {
  let result = await driver.findElement(By.id('search')).getText();
  console.log(result);
});
