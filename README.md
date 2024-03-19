# Automatización de Pruebas Frontend con Playwright

Este repositorio contiene pruebas automatizadas para realizar pruebas en el frontend utilizando Playwright.

## Instalación

1. Clona este repositorio:

```
git clone <URL_DEL_REPOSITORIO>
```

2. Instala las dependencias:

```
npm install
```

## Ejecución de Pruebas

Puedes ejecutar las pruebas utilizando los siguientes comandos:

- Ejecutar las pruebas con la interfaz de usuario de Playwright:

```
npx playwright test --ui
```

- Ejecutar las pruebas y mostrar los resultados en formato de lista:

```
npx playwright test --reporter=list
```

- Ejecutar las pruebas y generar un informe HTML:

```
npx playwright test --reporter=html
```

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
.
├── tests/                     # Directorio que contiene los archivos de pruebas
│   └── your-store.spec.ts     # Archivo de prueba
├── package.json               # Archivo de configuración de npm
└── playwright.config.js       # Archivo de configuración de Playwright
```

## Configuración

Puedes personalizar la configuración de Playwright en el archivo `playwright.config.js`. Consulta la documentación oficial de Playwright para obtener más información sobre las opciones de configuración disponibles.

## Contribución

Si deseas contribuir a este proyecto, no dudes en enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
