Feature: Checkout de productos en Sauce Demo

    Como un cliente de Sauce Demo,
    Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
    Para poder adquirir los productos que necesito


    @Checkout @SauceDemo
    Scenario: Completar compra exitosamente
       Given que accedo a la pagina de inicio de sesion de Sauce Demo
        When ingreso el usuario "standard_user" y contraseña "secret_sauce"
        Then se visualiza la pagina de productos
        When agrego los productos "Sauce Labs Backpack" y "Sauce Labs Bolt T-Shirt" al carrito
        Then el carrito deberia contener 2 productos
        When reviso el carrito
        And procedo al checkout
        And ingreso los datos de envío con nombre "Jessica", apellido "Chepe" y código postal "12345"
        And finalizo mi compra
        Then visualizo el mensaje de confirmacion "Thank you for your order!"

