const {Builder, By} = require('selenium-webdriver');

(async function example() {
   let driver = await new Builder()
       .forBrowser('chrome')
       .build();

   await driver.get('http://www.npmjs.com');
   let searchBox = driver.findElement(By.name("q"));
   await searchBox.sendKeys("axios");
}())