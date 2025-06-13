class ProductsPage {
    async addProductToCart(productName) {
        const productSelector = `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`;
        await page.click(productSelector);
    }

    async getCartItemCount() {
        const countText = await page.textContent('.shopping_cart_badge');
        return parseInt(countText, 10);
    }
}

module.exports = ProductsPage;
