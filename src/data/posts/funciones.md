---
title: "Funciones en C#"
description: "Si queremos repetir tareas en nuestro código, necesitamos funciones"
language: "C#"
pubDate: "2022-10-06"
---

# ¿Qué son las funciones?
Las funciones son elementos de la programación que nos sirven para ejecutar tareas de forma encapsulada al resto del código. Podemos decir que las funciones son programas dentro de nuestro programa.

Algunos casos de uso de las funciones pueden ser realizar tareas repetitivas a lo largo de nuestro código como podría ser una serie de cálculos. En lugar de escribir todo el rato esa misma serie de cálculos, podemos crear una función y llamarla cada vez que la necesitemos.

<br/>

# Estructura de una función

En C# se entiende que es una función porque justo al lado del nombre de esta, tiene unos paréntesis **()** y también nos indica el tipo de dato que va a devolver, si es que devuelve.

    int sum()
    {
        return 2 + 3;
    }

    // La ejecución de la función devuelve un resultado.
    // Este resultado podemos asignarlo a una variable.
    int five = sum();

A estas funciones podemos pasarles argumentos a nuestras funciones para que realicen esas operaciones con valores dinámicos:

    int sum(int a, int b)
    {
        return a + b;
    }

    /** Pasamos cualquier parámetro
    * que sea del tipo que la función
    * nos pide. */
    int result = sum(291, 323); // 614

También podemos crear funciones que no devuelvan ningún valor. En este caso se usa el tipo **void**:

    void noReturnFunction()
    {
        List<int> numbers = new List<int>();
        numbers.Add(1);
        numbers.Add(2);
    }

Como veíamos en el artículo anterior, una función dentro de una clase se llama método.

En el [artículo siguiente](../clases) veremos las clases y sus características.
