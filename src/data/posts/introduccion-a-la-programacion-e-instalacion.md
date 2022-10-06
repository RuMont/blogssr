---
title: "Empezar a programar en C#"
description: "Introducción breve al lenguaje"
language: "C#"
pubDate: "2022-9-23"
---

Algunos empezamos a programar de forma autodidacta, otros empiezan directamente con una formación oficial, como en el caso de España los grados superiores de Desarrollo de Aplicaciones Web y Desarrollo de Aplicaciones Multiplataforma o incluso un grado universitario. Sea cual sea el camino que elijas, el hecho es que estás aquí porque tienes cierto interés en aprender a programar.

Enfocaremos los artículos desde el punto de vista de alguien que no sabe programar o es muy novato en el mundo de la programación y usaremos un lenguaje como C# (C Sharp), un lenguaje muy completo que nos permitirá crear cualquier tipo de programa o aplicación.

<br/>

# ¿Qué es C#?

C# es un lenguaje creado por Microsoft y es un lenguaje compilado multiparadigma (los paradigmas de programación son, en resumen, formas de programar), por lo que cualquier tipo de programador con cierta experiencia puede aprender este lenguaje sin dejar de programar con su estilo anterior.

Los paradigmas de programación más usados son la programación orientada a objetos (OOP por sus siglas en inglés) y la programación funcional. Más adelante nos centraremos en concreto en la programación orientada a objetos, aunque por ahora puedes entender este estilo de programación como la representación de objetos del mundo real dentro de un programa.

<br/>

# Instalación del entorno

Para empezar a crear código en C# vamos a usar un IDE (entorno de desarrollo integrado), llamado Visual Studio. Lo descargaremos de [la página oficial de Microsoft](https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false). Una vez nos lo descarguemos se nos abrirá el instalador de Visual Studio 2022.

Aquí debemos instalar dos paquetes:
- **Desarrollo de ASP.NET y web**: crearemos en un futuro aplicaciones web, con su aplicación de servidor y su aplicación de cliente.
- **Desarrollo de escritorio de .NET**: nos ayudará para crear aplicaciones de consola básicas.

<img src="https://i.imgur.com/E936U3Q.png" class="responsive">

Una vez instalados estos paquetes crearemos un nuevo proyecto que sea una aplicación de consola.

<img src="https://i.imgur.com/BIe155l.png" class="responsive" alt="Create a new project">

<img src="https://i.imgur.com/JB3UolL.png" class="responsive" alt="Console App">

Colocaremos el proyecto y la solución en la misma carpeta para este proyecto en concreto:

<img src="https://i.imgur.com/LyyiNtZ.png" class="responsive" alt="Save Console App on directory">

Seleccionamos el framework .NET 6.0 con el recuadro desmarcado:

<img src="https://i.imgur.com/HXUMHqL.png" class="responsive" alt="Select .NET6 as framework">

Llegados a este punto con el proyecto creado veremos una pantalla tal como esta (aunque con las letras sin ampliar):

<img src="https://i.imgur.com/4C9aXtK.png" class="responsive" alt="Main window when creating a console app">

Un entorno de desarrollo integrado es un software que nos ayuda a los programadores a crear aplicaciones de una forma ciertamente cómoda. En concreto hemos creado una aplicación de consola de una forma sencilla en lugar de tener nosotros que usar un editor de texto plano, crear los ficheros a mano y tener que descargar un <ins>compilador</ins>, ya que el IDE lleva integradas todas estas herramientas.

Por ahora únicamente le daremos al siguiente botón para ejecutar el programa:

<img src="https://i.imgur.com/L3jFdyn.png" class="responsive" alt="Run without debugging">

En el [siguiente artículo](../interfaz-de-visual-studio) veremos la estructura de la interfaz de Visual Studio 2022.