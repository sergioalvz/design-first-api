# _Design-first_ en el desarrollo de APIs

Este repositorio sirve de complemento para: [**_Design-first en el desarrollo de APIs_**](https://www.meetup.com/AsturiasHacking/events/249100549/), una charla organizada por [AsturiasHacking](http://asturiashacking.org) el día 18 de mayo de 2018.

A continuación se detallan una serie de razones y tecnologías que posibilitan el desarrollo de APIs (generalmente REST-like) empezando por su propio diseño en lugar de por su implementación.

## Tabla de contenidos

<!-- TOC -->

- [_Design-first_ en el desarrollo de APIs](#_design-first_-en-el-desarrollo-de-apis)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [¿Por qué _design-first_?](#¿por-qué-_design-first_)
  - [¿Cómo puedo _design-first_?](#¿cómo-puedo-_design-first_)
  - [Proyecto de ejemplo](#proyecto-de-ejemplo)
    - [Advertencia](#advertencia)
    - [¿Cómo arrancar el proyecto?](#¿cómo-arrancar-el-proyecto)
    - [¿Cómo ejecuto los tests?](#¿cómo-ejecuto-los-tests)
  - [Referencias, más herramientas y enlaces de interés](#referencias-más-herramientas-y-enlaces-de-interés)

<!-- /TOC -->

## ¿Por qué _design-first_?

Algunos de los beneficios de arrancar con el diseño de una API antes incluso de implementar una sola línea de su lógica de negocio son:

- **Dedicar tiempo a** lo que realmente importa: **conocer el dominio del problema**
- **Evitar** la tentación de **ajustar el diseño a un desarrollo ya existente**. Y, por lo general, ofrecer una **solución más coherente y** más **orientada al** propio **consumidor** del servicio
- **Documentación**: bien sea a través de un lenguaje de descripción de APIs o a través de otro tipo de documento
- Capacidad de **probar el diseño** y realizar cambios **cuando el coste aún es mínimo**
  - Favorece la independencia entre equipos y el desarrollo en paralelo de nueva funcionalidad que dependa de una API común

## ¿Cómo puedo _design-first_?

Si bien es cierto que se podría diseñar una API utilizando simplemente papel y lápiz, existen herramientas más potentes que nos permiten expresar nuestras decisiones de diseño de una manera mucho más concreta y formal.

[OpenAPI](https://www.openapis.org/) o [API Blueprint](https://apiblueprint.org/) son dos ejemplos de lenguajes orientados a describir APIs en un formato _machine readable_, lo que permite a su vez que otros programas puedan entender esta especificación para generar código que permita consumir dichos servicios, validarlos, documentarlos, etc.

Ambas alternativas soportan su propio lenguaje de especificación; en el caso de OpenAPI, permite que la descripción sea desarrollada utilizando JSON o YAML, mientras que API Blueprint tiene [su propio lenguaje](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md), influenciado en parte por la sintaxis de Markdown.

La mayor ventaja de utilizar este tipo de herramientas es que, desde su concepción, están pensadas para poder expresar el diseño de cualquier API, por lo que soportan la definición de rutas, validaciones, esquemas de autenticación, cabeceras de peticiones y respuestas, etc.

## Proyecto de ejemplo

En este repositorio, se adjunta un esqueleto de proyecto que hace uso de los conceptos y tecnologías anteriores para definir un _toolset_ que permita la generación _rápida_ de una especificación de OpenAPI utilizando código JavaScript (TypeScript) en lugar de trabajar directamente con JSON / YAML (únicos lenguajes soportados nativamente por la herramienta).

Como pieza central del proyecto, tenemos a [`hapi`](https://hapijs.com), una librería de [Node](https://nodejs.org/en/) muy sencilla y diseñada específicamente para el desarrollo de APIs REST-like. Por decisiones de diseño, el _core_ de `hapi` es muy pequeño y espera que se complemente su funcionalidad utilizando su vasto ecosistema de plug-ins. Uno de los más populares es [`hapi-swagger`](https://github.com/glennjones/hapi-swagger), que nos permite crear una especificación de OpenAPI a partir de la propia definición de rutas en `hapi`. Existen también otros plug-ins similares como [`hapi-openapi`](https://github.com/krakenjs/hapi-openapi) que funcionan exactamente al revés: a partir de la especificación de OpenAPI (anteriormente conocido como _Swagger_), generar los manejadores de rutas correspondientes.

Uno de los puntos más interesantes de `hapi` es su integración nativa con [`joi`](https://github.com/hapijs/joi), una librería que nos permite definir esquemas de objetos sobre los que poder validar las peticiones y respuestas de nuestra API. Utilizando `joi` y el plugin de OpenAPI comentado anteriormente, somos capaces además de documentar estas restricciones y validaciones en la propia especificación de nuestra API.

### Advertencia

En uno de los puntos anteriores, se esgrimía que el diseño primero que la implementación ofrecía la posibilidad de evitar la tentación de acoplar nuestro diseño a un desarrollo ya vigente. Con el enfoque propuesto en este proyecto, sin embargo, vamos a escribir la especificación desde el mismo punto desde el que después añadiremos nuestra implementación, asumiendo esto como un _trade-off_ para equilibrar el esfuerzo invertido (en aprender una especificación o incluso un lenguaje nuevo) contra el valor obtenido (obtener un flujo de trabajo en el que podamos desarrollar una especificación formal de nuestra API antes de arrancar con su implementación).

Mucha literura aconseja utilizar el propio lenguaje de la especificación (JSON / YAML en el caso de OpenAPI) como un mecanismo para conseguir la máxima independencia entre la fase de diseño y la fase de implementación.

### ¿Cómo arrancar el proyecto?

> Prerrequisito: para trabajar con este proyecto es necesario tener instalado [`node`](https://nodejs.org/en/download/package-manager/).

Lo primero (un vez descargado, clonado o hecho un _fork_ del proyecto) es instalar sus dependencias. Todas ellas están definidas en el fichero `package.json`, por lo que con ejecutar el comando `npm install` desde la raíz del proyecto debería ser suficiente.

Una vez hecho esto, existe una tarea de `npm` destinada a arrancar el proyecto y configurar también un servicio de _hot reloading_ para poder ver los cambios de manera instantánea (sin necesidad de parar y arrancar de nuevo el servidor):

- `npm run start:watch` arranca la aplicación y la hace accesible a través de la dirección: <http://localhost:8080>.

### ¿Cómo ejecuto los tests?

Con las dependencias ya instaladas, basta con escribir: `npm run test` en vuestra terminal (desde la raíz del proyecto) para poder ejecutar la _suite_ de tests.

## Referencias, más herramientas y enlaces de interés

- [APIs You Won't Hate](https://apisyouwonthate.com/)
- [Design-first API Specification Workflow Matures](https://philsturgeon.uk/api/2018/03/01/api-specification-workflow-matures/)
- [apiaryio/dredd](https://github.com/apiaryio/dredd)
- [wework/speccy](https://github.com/wework/speccy)
