const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CheckoutPage = require('../pages/CheckoutPage');
const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const checkoutPage = new CheckoutPage();

Then('se visualiza la pagina de productos', async function () {
    await page.waitForSelector('.inventory_list');
});

When('agrego los productos {string} y {string} al carrito', async function (product1, product2) {
    await productsPage.addProductToCart(product1);
    await productsPage.addProductToCart(product2);
});

Then('el carrito deberia contener {int} productos', async function (expectedCount) {
    const count = await productsPage.getCartItemCount();
    if (count !== expectedCount) {
        throw new Error(`Se esperaban ${expectedCount} productos, pero hay ${count}`);
    }
});



When('reviso el carrito', async function () {
    await checkoutPage.goToCart();
});

When('procedo al checkout', async function () {
    await checkoutPage.proceedToCheckout();
});

When('ingreso los datos de envío con nombre {string}, apellido {string} y código postal {string}', async function (nombre, apellido, postal) {
    await checkoutPage.fillShippingInfo(nombre, apellido, postal);
});

When('finalizo mi compra', async function () {
    await checkoutPage.finishPurchase();
});

Then('visualizo el mensaje de confirmacion {string}', async function (mensajeEsperado) {
    const mensaje = await checkoutPage.getConfirmationMessage();
    if (mensaje.trim() !== mensajeEsperado) {
        throw new Error(`Se esperaba el mensaje "${mensajeEsperado}", pero se obtuvo "${mensaje}"`);
    }
});
