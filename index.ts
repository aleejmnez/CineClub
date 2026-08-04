class pelicula {
  titulo: string;
  anio: number;
  genero: string;
  duracion: number;
  director: string;
  calificacion: number;

  // el constructor recibe los datos y los asogna a la instancia //

  constructor(
    titulo: string,
    anio: number,
    genero: string,
    duracion: number,
    director: string,
    calificacion: number,
  ) {
    this.titulo = titulo;
    this.anio = anio;
    this.genero = genero;
    this.duracion = duracion;
    this.director = director;
    this.calificacion = calificacion;
  }

  // mostrar informacion formateada
  mostrarInformacion(): void {
    console.log("-------------------------");
    console.log(`${this.titulo}`);
    console.log(`Director: ${this.director}`);
    console.log(`Año: ${this.anio}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Duración: ${this.duracion} minutos`);
    console.log(`${this.calificacion}/10`);
    console.log("-------------------------");
  }

  // verificar si es recomendad (me muestra las peliculas que hayan sacado calificacion igual o mayor que 8)
  esRecomendada(): boolean {
    return this.calificacion >= 8;
  }

  // verificar si es larga la duracion de la pelicula, si una pelicula dura mas de 120 min es considerada larga//
  esLarga(): boolean {
    return this.duracion > 120;
  }

  actualizarCalificacion(nuevaCalificacion: number): void {
    if (nuevaCalificacion >= 0 && nuevaCalificacion <= 10) {
      this.calificacion = nuevaCalificacion;
      console.log(
        ` Calificación de "${this.titulo}" actualizada a ${nuevaCalificacion}`,
      );
    } else {
      console.log(`Error: La calificación debe estar entre 0 y 10.`);
    }
  }
}

const pelicula1 = new pelicula(
  "Interstellar",
  2014,
  "Ciencia ficción",
  169,
  "Christopher Nolan",
  9,
);

const pelicula2 = new pelicula(
  "The Dark Knight",
  2008,
  "Acción",
  152,
  "Christopher Nolan",
  9.2,
);
const pelicula3 = new pelicula(
  "Parasite",
  2019,
  "Thriller",
  132,
  "Bong Joon-ho",
  8.5,
);
const pelicula4 = new pelicula(
  "El Padrino",
  1972,
  "Crimen",
  175,
  "Francis Ford Coppola",
  9.2,
);
const pelicula5 = new pelicula(
  "Toy Story",
  1995,
  "Animación",
  81,
  "John Lasseter",
  8.3,
);

console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);
console.log(pelicula4);
console.log(pelicula5);
console.log();
