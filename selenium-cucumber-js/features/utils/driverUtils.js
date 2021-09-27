const webdriver = require("selenium-webdriver");

exports.initDriver = () => {
    driver = new webdriver.Builder().forBrowser("firefox").build();
}
