const {Builder, By} = require('selenium-webdriver');
var assert = require('assert');

describe('Site', function () {
    this.timeout(15000);
    it('has a search box and a title', async function () {
        let driver = await new Builder()
            .forBrowser('chrome')
            .build();

        await driver.get('http://www.npmjs.com');
        assert.doesNotThrow(() => driver.findElement(By.name("q")));
        driver.getTitle().then(title => {
            assert.strictEqual(title, 'npm | build amazing things');
        }).then(_ => { return driver.quit() });

    });

});
