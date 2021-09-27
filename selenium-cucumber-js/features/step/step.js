const { When, Then, After, Before, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");

let multiply = 0;

// Synchronous
Before(function () {
  console.log("Didalam scope before");
});

// Asynchronous Promise
After(function () {
  console.log("Didalam scope after");
});

When("I multiply {int} and {int}", function (number1, number2) {
  multiply = number1 * number2;
});

Then("the result should be {int}", function (result) {
  expect(multiply).equal(result);
});

// Given("I visit github homepage", async () => {
//     await driver.get("https://github.com/");
// });

// When("I search ksatriow on github", async () => {});

// Then("I should see the result", async () => {});
