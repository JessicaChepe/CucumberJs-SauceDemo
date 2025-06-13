🧪 Suite de Pruebas Automatizadas – Sauce Demo

📌 Objetivo
Desarrollar una suite de pruebas automatizadas para la aplicación web Sauce Demo utilizando Playwright junto con Cucumber, aplicando un patrón de diseño adecuado para garantizar la mantenibilidad, escalabilidad y legibilidad del código.

🧑‍💻 Historia de Usuario
Como cliente de Sauce Demo,
Quiero poder iniciar sesión, agregar productos al carrito y completar una compra,
Para poder adquirir los productos que necesito de forma eficiente.

⚙️ Especificaciones Técnicas
🔧 Configuración del Proyecto
Framework de automatización: Playwright
Lenguaje: JavaScript/TypeScript
Integración BDD: Cucumber
Patrón de diseño sugerido: Page Object Model (POM)

🔐 Credenciales de Prueba
Tipo de Usuario	Usuario	Contraseña
Usuario estándar	standard_user	secret_sauce
Usuario bloqueado	locked_out_user	secret_sauce


🧪 Casos de Prueba Iniciales
Inicio de sesión exitoso con usuario estándar.
Inicio de sesión fallido con usuario bloqueado.
Agregar productos al carrito desde el catálogo.
Verificar contenido del carrito.
Completar el proceso de compra exitosamente.


🚀 Ejecución de Pruebas

Clona el repositorio:
git clone https://github.com/tu-usuario/sauce-demo-tests.git
cd sauce-demo-tests

Instala las dependencias:
npm install

Ejecuta las pruebas:
npm run test

![image](https://github.com/user-attachments/assets/51330dfe-871d-4d9a-af87-f7fa08842f99)


