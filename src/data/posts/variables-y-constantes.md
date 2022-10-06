---
title: "Variables y constantes en C#"
description: "Unidades básicas en cualquier programa"
language: "C#"
pubDate: "2022-10-05"
---

Las variables y las constantes son las unidades básicas con las que realizamos acciones en nuestro código.

<br/>

# Variables

Las variables son unos identificadores que nos ayudan a conocer un valor (estos valores se guardan en la memoria volátil del ordenador, normalmente la RAM). Estos identificadores pueden cambiar de valor, ya que, como su nombre indica, son variables.

En C# podemos declarar una variable de la siguiente manera:

    int firstNum = 1;

    var username = "rodri14xx"

    string name = "Pepe";

Y podemos cambiar su valor en cualquier momento:

    firstNum = 2;

    name = "Jose";

La palabra **var** es una [palabra reservada (keyword)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/) y no podemos usarla como nombre de una variable, ya que le sirven al compilador para saber que eso que estamos escribiendo es efectivamente una variable.

Con la palabra **var** la variable obtiene un <ins>tipo</ins> dependiendo del valor, pero con las palabras **string** o **int** nosotros le indicamos el tipo de la variable al compilador (hablaremos sobre los tipos en artículos siguientes).

    int firstNum = 2;

    int secondNum = 3;

    var multResult = firstNum * secondNum; 

    Console.WriteLine(multResult); // El resultado es 6

    secondNum = 4;

    Console.WriteLine(multResult); // El resultado es 8

<br/>

# Constantes

Las constantes, a diferencia de las variables, las usamos cuando queremos que un valor no cambie (y nos dará error si lo intentamos cambiar). Además, en C# nos obliga a especificar el tipo de la constante.

    const int FIRST_NUM = 4;

Si queremos cambiar el valor:

    FIRST_NUM = 5;

Nos saltará un error:

<img src="https://i.imgur.com/5wuxpzs.png" class="responsive" alt="Error al cambiar el valor de una constante">

Por esto, sólo podremos usar las constantes para leerlas, nunca para modificarlas.

En C# existe la keyword **readonly**, que es parecida a **const** pero la veremos con las clases.

En el [siguiente artículo](../tipos) veremos los tipos de las variables.

