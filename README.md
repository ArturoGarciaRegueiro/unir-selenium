# Repo para EIEC - DevOps - UNIR

Este repositorio incluye un ejemplo sencillo de Selenium. Requiere la instalación manual y configuración del PATH del webdriver de Selenium; los drivers están disponibles para todos los navegadores principales en https://www.selenium.dev/documentation/en/webdriver/driver_requirements/ (por ejemplo, para Chrome hay que descargarlo de http://chromedriver.chromium.org/).

El código ejecuta las acciones sobre Chrome, pero cambiar el ejemplo para usar otro navegador es tan sencillo como editar la línea `.forBrowser('chrome')`.

Para lanzar el ejemplo (tras la instalación del webdriver) hay que ejecutar `npm install` seguido de `npm run launch` para ejecutarlo como un programa normal o `npm run test` para ejecutarlo como una batería de pruebas.