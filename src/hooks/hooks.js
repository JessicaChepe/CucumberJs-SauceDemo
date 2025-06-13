const { After, AfterAll, AfterStep, Before, BeforeAll } = require('@cucumber/cucumber');
const { invokeBrowser } = require('../helper/browsers/browserManager');
const { getEnv } = require('../helper/env/env');

BeforeAll(async function () {
    getEnv();
    global.browser = await invokeBrowser();
});

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.browser.newPage();
});

After(async function () {
    await global.page.close();
    await global.context.close();
});

AfterAll(async function () {
    await global.browser.close();
});

AfterStep(async function () {
    const img = await global.page.screenshot({ type: 'png' });
    await this.attach(img, 'image/png');
});
