---
title: "Tipos en C#"
description: "C# es un lenguaje de tipado fuerte, por lo que los tipos son muy importantes"
language: "C#"
pubDate: "2022-10-06"
---

Existen lenguajes con tipados débiles como JavaScript o PHP, en los que las variables pueden cambiar de tipo fácilmente. Normalmente suelen ser los lenguajes que no son compilados; estos lenguajes tienen un intérprete que identifica el tipo de las variables.

A diferencia de estos lenguajes, C# es un lenguaje de programación de tipado fuerte o estricto; esto es, las variables no pueden cambiar su tipo una vez declaradas (salvo en algunas situaciones). Esto hace de C# un lenguaje más robusto y seguro al crear un proyecto, aunque hay que dedicar algo más de tiempo.

En la [documentación oficial](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/types/) de .NET se explica el sistema de tipos de C#, pero aquí lo explicaremos de una forma más sencilla de comprender.

<br/>

# ¿Qué es un tipo?

Una variable siempre, en todos los lenguajes, debe de llevar un tipo, ya sea numérico (entero o flotante), cadena de caracteres (string), booleano (true o false), entre otros.

Los tipos otorgan de funcionalidad a la variable, pues nuestro IDE nos sugerirá ciertas funciones que podremos usar con un tipo determinado. Podemos sumar dos números con valor distinto pero no podemos sumar dos números de tipo **string**:

    int firstNum = 2;
    int secondNum = 3;

    int multResult = firstNum + secondNum; // El resultado es 5

    string thirdNum = "2";
    string fourthNum = "3";
    string sumResult = thirdNum + fourthNum; // El resultado es 23

    // Esto será un string con valor 32
    var badResult = secondNum + thirdNum;

En C#, a diferencia de otros lenguajes, los tipos no pueden cambiar, al menos que usemos alguna técnica algo más avanzada llamada _casting_.

Saber que el tipo de las variables no va a cambiar salvo que se fuerce otorga mucha seguridad al programar, sobretodo en proyectos de gran envergadura, aunque el programa requiere algo más de tiempo.

<br/>

# Tipos integrados

C#, como en la mayoría de lenguajes, trae consigo ciertos [tipos](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/built-in-types) ya integrados. Estos tipos se clasifican en dos: tipos de valor o primitivos y tipos de referencia.

<br/>

## Tipos de valor

Los [tipos de valor](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/value-types) son aquellos que existen dentro de un lugar concreto de la memoria, como son los tipos **int**, **double**, **bool**, **char**, **byte** o **struct**.

<br/>

#### 1. Tipos numéricos

Los tipos numéricos <ins>integrados</ins> representan números enteros, sin decimales, y permiten realizar [operaciones aritméticas](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/arithmetic-operators) (una multiplicación), [lógicas](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/boolean-logical-operators) (ver si una condición se cumple o no), de comparación (si un número es mayor que otro) y de igualdad (si un número es igual a otro).

El tipo numérico entero más usado es **int**.

    int cars = 5;

    int bikes = 3;

    // Operación aritmética
    int vehicles = cars + bikes; // El resultado es 8;

    // Operación lógica
    var isCarsAmountHigher = cars > bikes; // El resultado es un booleano con valor true

Los tipos numéricos <ins>flotantes</ins> representan números reales, con decimales, y también permiten operaciones aritméticas y lógicas.

El tipo numérico real más usado es **double**.

    int apples = 4;

    double people = 3.0;

    // Operación aritmética
    double applesPerPerson = apples / people; // El resultado es 1.33333333334

    // Operación lógica
    bool moreApplesThanPeople = apples > people; // El resultado es true

<br/>

#### 2. Tipos booleanos

El tipo booleano representa un valor binario que puede ser **_true_ o _false_**. Los tipos booleanos se utilizan en [operaciones lógicas](https://www.smartick.es/blog/otros-contenidos/programacion/operadores-booleanos/); en estructuras de control como los condicionales (if-else).

Podemos hacer comprobaciones en nuestro código para ver si ejecutamos una parte del código en concreto o no:

    int apples = 4;

    double people = 3.0;

    double applesPerPerson;

    // Si hay más manzanas que personas
    // dividimos las manzanas entre ellos
    if (apples > people)
    {
        applesPerPerson = apples / people;
    }
    // Si hay menos manzanas, las multiplicamos
    // por dos
    else
    {
        people *= 2;
    }

<br/>

#### 3. Caracteres

El tipo **char** representa una letra, aunque se almacena en memoria como un caracter [Unicode](https://es.wikipedia.org/wiki/Unicode) de 16 bits, por lo que podemos hacer operaciones ariméticas y lógicas con los chars.

Aunque su uso más común es la formación de palabras, que son los <ins>strings</ins>.

El tipo **struct** lo veremos más adelante, pues es un tipo más complejo que los anteriores, ya que puede tener variables y funciones dentro de la estructura.

<br/>

## Tipos de referencia

Las variables con [tipos de referencia](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/reference-types), a diferencia de los de valor, son una dirección de memoria a donde se encuentran los valores que componen esa variable.

Podemos decir que un tipo de referencia no tiene los valores pero tiene la dirección de memoria de ellos.

Las estructuras más comunes que son tipos de referencia son los [strings](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type), los [vectores](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/arrays/single-dimensional-arrays) (arrays), las [listas](https://learn.microsoft.com/es-es/dotnet/api/system.collections.generic.list-1?view=net-6.0) y los [objetos](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type).

<br/>

#### 1. Cadenas de caracteres

Un **string** es una secuencia de valores de tipo **char**. Los strings permiten operadores de igualdad.

    string myName = "Pepe";
    string hisName = "Pepe";

    bool areNamesTheSame = myName == hisName; // true

También podemos concatenar strings:

    string myName = "Pepe";
    string hisName = "Pepe";

    string doubleName = myName + hisName; // "PepePepe";

<br/>

#### 2. Arrays

Con el operador **[]** podemos acceder a letras en concreto del string.

    string myName = "Pepe";
    char letterE = myName[1]; // obtenemos la e

El símbolo **[]** identifica un array o vector. Los arrays son colecciones de datos de un mismo tipo. En C# únicamente podemos leer estos valores, no podemos modificarlos ([y es mejor que sea así](https://medium.com/@akedalat/how-arrays-allocate-memory-a9bc93c0ad45)).

<img src="https://miro.medium.com/max/640/1*-ImKrqrT14UlG6wMpAEIJQ.png" class="responsive">

Para crear arrays hay que especificar una longitud fija:

    int[] numbers = new int[5];
    // o también
    int[] numbers = new int[] {1, 2, 3, 4, 5};
    // o incluso
    int[] numbers = {1, 2, 3, 4, 5};

Los arrays son colecciones que podemos recorrer con **bucles**, que veremos más tarde.

Para obtener algún valor de nuestro array 'numbers' necesitamos buscar el valor según la posición en el array (mejor llamado índice).

Como en la ilustración anterior indica, los arrays en programación (salvo en algún lenguaje peculiar como Lua) empiezan por el índice 0.

Por lo que si queremos obtener el número 1 de nuestro array, buscaremos la posición 0:

    int[] numbers = new int[] {1, 2, 3, 4, 5};
    int numberOne = numbers[0]; // 1

<br/>

#### 3. Listas

<img src="https://i.imgur.com/POZoOkE.png" class="responsive">

Las listas, a diferencia de los arrays no tienen una longitud fija, si no que son valores unidos mediante [punteros](https://www.c-sharpcorner.com/article/pointers-in-C-Sharp/).

Aquí no veremos los punteros, ya que forman parte del código no seguro en el que el desarrollador debe de gestionar él mismo la memoria. C# ya cuenta con una herramienta para gestionar la memoria, el [garbage collector](https://www.c-sharpcorner.com/article/pointers-in-C-Sharp/).

En las listas podemos quitar y añadir valores:

    string myName = "Marcos";
    List<string> names = new List<string>();

    // Podemos añadir y borrar elementos en la lista
    names.Add(myName); // {"Marcos"}
    names.Add("Jose Luis"); // {"Marcos", "Jose Luis"}
    names.Contains("Pepe"); // false
    names.Remove("Jose Luis"); // {"Marcos"}
    names.Add("Paco"); // {"Marcos", "Paco"}
    names.Remove(names[0]); // {"Paco"}

    names.Clear();

    names.Capacity; // 0;

<br/>

#### 4. El tipo objeto

El tipo objeto es un tipo de referencia complejo, pues se compone de:

- Propiedades o atributos (variables dentro del objeto)
- Métodos (funciones dentro del objeto)

Los objetos pueden ser creados a partir de una **clase** o de una **struct** que actúan como plantillas, o pueden ser creados manualmente.

    object obj = new object();

Sin embargo, esto no tiene mucha utilidad en C#. En otros lenguajes como Javascript, los objetos son un tipo de dato clave/valor, también llamado **[diccionario o mapa](https://learn.microsoft.com/es-es/dotnet/api/system.collections.generic.dictionary-2?view=net-7.0#remarks)**.

    // Instancias de clases que nos permiten leer archivos
    Stream stream = new MemoryStream();

    StreamReader reader = new StreamReader(stream);

    reader.Read();

Los objetos son instancias de una clase. Es decir, si una clase fuera la un taller de coches, el objeto sería el coche, con sus métodos de moverse y sus atributos ruedas.

En el [siguiente artículo](../funciones) veremos las funciones.