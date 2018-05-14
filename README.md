# _Design-first_ en el desarrollo de APIs

Este repositorio sirve de complemento para la charla realizada en la sesión de
[AsturiasHacking](http://asturiashacking.org) del día 18 de mayo de 2018: **_Design-first en el desarrollo de APIs_**.

A continuación se detallan una serie de razones y tecnologías que posibilitan el desarrollo de APIs (generalmente REST-like) empezando por su propio diseño en lugar de por su implementación.

## Tabla de contenidos

<!-- TOC -->

* [_Design-first_ en el desarrollo de APIs](#_design-first_-en-el-desarrollo-de-apis)
  * [Tabla de contenidos](#tabla-de-contenidos)
  * [¿Por qué _design first_?](#¿por-qué-_design-first_)
  * [¿Cómo puedo _design-first_?](#¿cómo-puedo-_design-first_)
  * [_Stack_ de ejemplo](#_stack_-de-ejemplo)
    * [Advertencia](#advertencia)
  * [Referencias](#referencias)

<!-- /TOC -->

## ¿Por qué _design first_?

Algunos de los beneficios de arrancar con el diseño de una API antes incluso de implementar una sola línea de su lógica de negocio son:

* **Dedicar tiempo a** lo que realmente importa: **conocer el dominio del problema**
* **Evitar** la tentación de **ajustar el diseño a un desarrollo ya existente**. Y, por lo general, ofrecer una **solución más coherente y** más **orientada al** propio **consumidor** del servicio
* **Documentación**: bien sea a través de un lenguaje de especificación de APIs o a través de otro tipo de documento
* Capacidad de **probar el diseño** y realizar cambios **cuando el coste aún es mínimo** (wut?!)
* Favorecer la independencia entre equipos y el desarrollo en paralelo de nueva funcionalidad que dependa de una API común

## ¿Cómo puedo _design-first_?

Si bien es cierto que se podría diseñar una API utilizando simplemente papel y lápiz, existen herramientas más potentes que nos permiten expresar nuestras decisiones de diseño de una manera mucho más concreta y formal.

[OpenAPI](https://www.openapis.org/) o [API Blueprint](https://apiblueprint.org/) son dos ejemplos de lenguajes orientados a describir APIs en un formato _machine readable_, lo que permite a su vez que otros programas puedan entender esta especificación para generar código que permita consumir dichos servicios, validarlos, documentarlos, etc.

## _Stack_ de ejemplo

En este repositorio, se adjunta un stack que hace uso de los conceptos y tecnologías anteriores para definir un toolset de herramientas que permitan la generación _rápida_ de una especificación de OpenAPI utilizando código JavaScript (TypeScript) en lugar de trabajar directamente con `JSON` / `YAML` (únicos lenguajes soportados nativamente por la herramienta).

Como pienza central del proyecto, tenemos a [`hapi`](https://hapijs.com), una librería de Node muy sencilla y diseñada específicamente para el desarrollo de APIs REST-like. Por decisiones de diseño, el _core_ de `hapi` es muy pequeño y espera que se complemente su funcionalidad utilizando su vasto ecosistema de plug-ins. Uno de los más populares es [`hapi-swagger`](https://github.com/glennjones/hapi-swagger), que nos permite crear una especificación de OpenAPI a partir de la propia definición de rutas en `hapi`. Existen también otros plug-ins similares como [`hapi-openapi`](https://github.com/krakenjs/hapi-openapi) que funcionan exactamente al revés: a partir de la especificación de OpenAPI (anteriormente conocido como _Swagger_), generar los manejadores de rutas correspondientes.

Uno de los puntos más interesantes de `hapi` es su integración nativa con [`joi`](https://github.com/hapijs/joi), una librería que nos permite definir esquemas de objetos sobre los que poder validar las peticiones y respuestas de nuestra API. Utilizando `joi` y el plugin de OpenAPI comentado anteriormente, somos capaces además de documentar estas restricciones y validaciones en la propia especificación de nuestra API.

### Advertencia

En uno de los puntos anteriores, se esgrimía que el diseño primero que la implementación ofrecía la posibilidad de evitar la tentación de acoplar nuestro diseño a un desarrollo ya vigente. Con el enfoque propuesto en este proyecto, la tentación sigue estando ahí, ya que vamos a escribir la especificación desde el mismo punto desde el que después añadiremos nuestra lógica de negocio. Mucha literura aconseja utilizar el propio lenguaje de la especificación (`JSON` / `YAML` en el caso de OpenAPI) como un mecanismo para conseguir la máxima indepencia entre la fase de diseño y la fase de implementación.

## Referencias

* [APIs You Won't Hate](https://apisyouwonthate.com/)
