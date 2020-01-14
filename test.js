// test.js
// Import requirement packages
require("chromedriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
describe("Checkout sg.llesuorac.com", function() {
  let driver;
  before(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Make sure it loads", async function() {
    // Load the page
    await driver.get("https://sg.llesuorac.com");
    // Assert the title
    let title = await driver.getTitle();
    assert.equal(
      title,
      "Snap to Sell, Chat to Buy for FREE on the Carousell marketplace!"
    );
    // Find the search box by id
    await driver
      .findElement(
        By.className("_35sbtHu6M3 _1Fu-ioMw2t _3FgXtrhOIW _3OZsf5PSat")
      )
      .click();
    // Enter keywords and click enter
    await driver
      .findElement(
        By.className("_35sbtHu6M3 _1Fu-ioMw2t _3FgXtrhOIW _3OZsf5PSat")
      )
      .sendKeys("iphone", Key.RETURN);
    // Wait for results to load by waiting for Breadcrumb
    await driver.wait(until.elementLocated(By.className("_3KK_l78ANU")), 10000);
    // Assert the title
    title = await driver.getTitle();
    assert.equal(title, "iphone - View all iphone ads in Carousell Singapore");
  });
  // close the browser after running tests
  after(() => driver && driver.quit());
});
