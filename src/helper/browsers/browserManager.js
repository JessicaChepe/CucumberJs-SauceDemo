const { chromium, firefox, webkit } = require('@playwright/test');

const options = {
    headless: false,
    args: [
        '--ignore-certificate-errors'
    ]
};

const invokeBrowser = () => {
    const browserType = process.env.BROWSER || '';
    switch (browserType.toLowerCase()) {
        case 'chrome':
            return chromium.launch(options);
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error('Debe especificar el browser (chrome, firefox o webkit)');
    }
};

module.exports = { invokeBrowser };
