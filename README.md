# Developing design-first APIs

Lorem ipsum...

## Table of Contents

* Philosophy
* How to design first?
* Technology Stack
* Testing
* Resources

## Philosophy

Since your specification is machine readable, chances are that it could also be _machine writable_. So, should you
write your specification before writing your business logic or should it be automatically generated from your own code?
There already exist two different problem solving strategies which sum up both options: **top-down** and **bottom-up**
(there is [some useful information in Wikipedia](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design) about
both terms).

## How to design first?

Maybe one of the most important things when trying to implement your REST API by following a design-first approach is
to choose a specification format to express your API design choices before writing any single line of code.

Although even a PDF document could serve to achieve this goal, using a formal language in a machine-readable format may
offer some of the following advantages:

* Have a **concise** and **common language** to express complex concepts
* Have a specification which could be **understood by other software** to generate: documentation, validations,
  clients and so on.

### Tools

* **[OpenAPI](https://www.openapis.org/)** (formerly **[Swagger](https://swagger.io/)**)
* **[API Blueprint](https://apiblueprint.org/)**
