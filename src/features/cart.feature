Feature: Agregar productos en Sauce Demo

    Como un cliente de Sauce Demo,
    Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
    Para poder adquirir los productos que necesito

    @Cart @SauceDemo
    Scenario: Carrito de compras en Sauce Demo
       Given que accedo a la pagina de inicio de sesion de Sauce Demo
        When ingreso el usuario "standard_user" y contraseña "secret_sauce"
        Then se visualiza la pagina de productos
        When agrego los productos "Sauce Labs Backpack" y "Sauce Labs Bolt T-Shirt" al carrito
        Then el carrito deberia contener 2 productos
        When reviso el carrito
    