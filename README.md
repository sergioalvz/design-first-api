# Developing design-first APIs

Lorem ipsum...

## Table of Contents

<!-- TOC -->

* [Developing design-first APIs](#developing-design-first-apis)
  * [Table of Contents](#table-of-contents)
  * [Design Strategies](#design-strategies)
  * [How to design first?](#how-to-design-first)
    * [Tools](#tools)

<!-- /TOC -->

## Design Strategies

There are -at least- two common approaches to design: top-down and bottom-up.
[Wikipedia](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design) says:

> Top-down approaches emphasize planning and a complete understanding of the system. It is inherent that no
> coding can begin until a sufficient level of detail has been reached in the design of at least some part of the
> system.
>
> Bottom-up emphasizes coding and early testing, which can begin as soon as the first module has been
> specified. This approach, however, runs the risk that modules may be coded without having a clear idea of how
> they link to other parts of the system, and that such linking may not be as easy as first thought.

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
