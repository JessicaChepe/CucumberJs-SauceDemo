Feature: Login en Sauce Demo

    Como un cliente de Sauce Demo,
    Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
    Para poder adquirir los productos que necesito

    @Login @Login_exitoso @SauceDemo
    Scenario: Inicio de sesión exitoso
        Given que accedo a la pagina de inicio de sesion de Sauce Demo
        When ingreso el usuario "standard_user" y contraseña "secret_sauce"
        Then se visualiza la pagina de productos

    @Login @Login_fallido @SauceDemo
    Scenario: Inicio de sesión fallido
        Given que accedo a la pagina de inicio de sesion de Sauce Demo
        When ingreso el usuario "invalid_user" y contraseña "secret_sauce"
        Then se visualiza un mensaje de error "Epic sadface: Username and password do not match any user in this service"

    @Login @Login_fallido_locked @SauceDemo
    Scenario: Inicio de sesión fallido con usuario bloqueado
        Given que accedo a la pagina de inicio de sesion de Sauce Demo
        When ingreso el usuario "locked_out_user" y contraseña "secret_sauce"
        Then se visualiza un mensaje de error "Epic sadface: Sorry, this user has been locked out."
       

 