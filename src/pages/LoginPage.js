// src/pages/LoginPage.js
class LoginPage {
    async navigateLoginScreen() {
        await page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await page.fill("//input[@name='user-name']", username);
        await page.fill("//input[@name='password']", password);
        await page.click("//input[@name='login-button']");
    }

    async getLoginErrorMessage() {
        await page.waitForSelector('[data-test="error"]');
        return await page.textContent('[data-test="error"]');
    }
}

module.exports = LoginPage;