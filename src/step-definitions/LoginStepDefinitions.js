// src/step-definitions/LoginStepDefinitions.js
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage'); // 👈 Importa la clase
const loginPage = new LoginPage(); // 👈 Crea una instancia

Given('que accedo a la pagina de inicio de sesion de Sauce Demo', async function () {
    await loginPage.navigateLoginScreen();
});

When('ingreso el usuario {string} y contraseña {string}', async function (username, password) {
    await loginPage.login(username, password);
});


Then('se visualiza un mensaje de error {string}', async function (mensajeEsperado) {
    const mensaje = await loginPage.getLoginErrorMessage();
    if (mensaje.trim() !== mensajeEsperado) {
        throw new Error(`Se esperaba el mensaje "${mensajeEsperado}", pero se obtuvo "${mensaje}"`);
    }
});

