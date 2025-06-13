class CheckoutPage {
    async goToCart() {
        await page.click('.shopping_cart_link');
        await page.waitForSelector('.cart_list');
    }

    async proceedToCheckout() {
        await page.click('#checkout');
        await page.waitForSelector('#first-name');
    }

    async fillShippingInfo(firstName, lastName, postalCode) {
        await page.fill('#first-name', firstName);
        await page.fill('#last-name', lastName);
        await page.fill('#postal-code', postalCode);
        await page.click('#continue');
        await page.waitForSelector('.summary_info');
    }

    async finishPurchase() {
        await page.click('#finish');
        await page.waitForSelector('.complete-header');
    }

    async getConfirmationMessage() {
        return await page.textContent('.complete-header');
    }
}

module.exports = CheckoutPage;
