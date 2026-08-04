# Actividad: CineClub — Gestor de películas

## Objetivo

Crear una aplicación en TypeScript que permita representar películas, crear un catálogo y realizar operaciones sobre ellas utilizando Programación Orientada a Objetos.

Al terminar, deberían haber practicado:

- Clases y objetos
- Propiedades
- Métodos
- Constructores
- Encapsulación básica
- Creación de múltiples objetos
- Arrays de objetos
- Herencia
- Sobrescritura de métodos
- Contexto

Un pequeño cine llamado CineClub necesita un sistema para organizar las películas disponibles en su catálogo.

Cada película debe guardar como minimo información como ( Pueden añadir mas ):

```bash
Título
Año
Género
Duración
Director
Calificación
```

## Parte 1 — Crear la clase Pelicula

1. Crear una clase llamada: `Pelicula`

2. Debe tener las siguientes propiedades:

```bash
titulo
anio
genero
duracion
director
calificacion
```

Ejemplo de una película:

```bash
Título: Interstellar
Año: 2014
Género: Ciencia ficción
Duración: 169 minutos
Director: Christopher Nolan
Calificación: 9
```

### Requisitos

La clase debe tener un constructor que permita crear una película enviando todos los datos necesarios.

Después deberán crear al menos 5 objetos.

Por ejemplo:

```bash
const pelicula1 = new Pelicula(/* ... */);
const pelicula2 = new Pelicula(/* ... */);
```

## Parte 2 — Métodos de una película

Agregar los siguientes métodos a la clase.

1. `mostrarInformacion()`

Debe mostrar algo parecido a:

```bash
Interstellar
Director: Christopher Nolan
Año: 2014
Género: Ciencia ficción
Duración: 169 minutos
⭐ 9/10
```

2. `esRecomendada()`

Una película será considerada recomendada si tiene una calificación mayor o igual a: `8`

ejemplo:

```bash
pelicula1.esRecomendada();
```

Debe devolver: `true` o `false`

3. `esLarga()`

Una película se considera larga cuando dura más de: `120 minutos` Debe devolver un booleano.

4. `actualizarCalificacion()`

Debe recibir una nueva calificación.

```bash
pelicula.actualizarCalificacion(9);
```

Pero hay una condición: `La calificación debe estar entre 0 y 10.`

Si alguien intenta:

```bash
pelicula.actualizarCalificacion(15);
```

la calificación no debe modificarse.

## Parte 3 — Crear un catálogo

Guardar todas las películas dentro de un array.

```bash
const peliculas: Pelicula[] = [];
```

Agregar por lo menos 8 películas.

---

### Después realizar las siguientes operaciones.

**Mostrar todas las películas**

Recorrer el array y utilizar: `mostrarInformacion()` para mostrar cada película.

**Mostrar solamente las recomendadas**

Utilizar el método: `esRecomendada()` para obtener películas con calificación de 8 o superior.

Resultado posible:

```bash
Películas recomendadas:

Interstellar ⭐ 9
The Dark Knight ⭐ 9.2
Parasite ⭐ 8.5
```

---

### Buscar película

Crear una función:

```bash
buscarPelicula(titulo: string)
```

Ejemplo:

```bash
buscarPelicula("Interstellar");
```

Si existe:

```bash
Película encontrada:
Interstellar
```

Si no existe:

```bash
Película no encontrada
```

### Buscar por género

Crear:

```bash
buscarPorGenero(genero: string)
```

Por ejemplo:

```bash
buscarPorGenero("Acción");
```

Debería mostrar todas las películas de acción.

## Parte 4 — Agregar herencia

Ahora CineClub comenzará a ofrecer dos tipos especiales de películas.

Crear una clase padre:

```bash
ContenidoAudiovisual
```

Con propiedades comunes:

```bash
titulo
anio
duracion
calificacion
```

Después modificar la estructura para tener:

```bash
ContenidoAudiovisual
        │
        ├── Pelicula
        │
        └── Documental
```

Clase `Pelicula`

Además de las propiedades heredadas deberá tener:

```bash
genero
director
```

Clase `Documental`

Debe tener:

```bash
tema
narrador
```

Ejemplo:

```bash
Título: Planeta Tierra
Año: 2006
Duración: 50 minutos
Calificación: 9
Tema: Naturaleza
Narrador: David Attenborough
```

Método heredado

ContenidoAudiovisual deberá tener:

```bash
mostrarInformacion()
```

Pero tanto **`Pelicula`** como **`Documental`** deberán modificar este método para mostrar su propia información.

La idea es practicar sobrescritura de métodos.

## Parte 5 — Desafío final

Crear una clase:

```bash
Catalogo
```

Esta clase deberá guardar los contenidos.

Por ejemplo:

```bash
class Catalogo {
  contenidos: ContenidoAudiovisual[];
}
```

Debe implementar los siguientes métodos:

```bash
agregar()
eliminar()
buscarPorTitulo()
mostrarTodos()
mostrarRecomendados()
```

Ejemplo de utilización:

```bash
const catalogo = new Catalogo();

catalogo.agregar(pelicula1);
catalogo.agregar(pelicula2);
catalogo.agregar(documental1);

catalogo.mostrarTodos();
```