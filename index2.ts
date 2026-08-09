class contenidoAudiovisual {
  titulo: string;
  anio: number;
  duracion: number;
  calificacion: number;

  // el constructor recibe los datos y los asogna a la instancia //

  constructor(
    titulo: string,
    anio: number,
    duracion: number,
    calificacion: number,
  ) {
    this.titulo = titulo;
    this.anio = anio;
    this.duracion = duracion;
    this.calificacion = calificacion;
  }

  // mostrar informacion formateada
  mostrarInformacion(): void {
    console.log("-------------------------");
    console.log(`${this.titulo}`);
    console.log(`Año: ${this.anio}`);
    console.log(`Duración: ${this.duracion} minutos`);
    console.log(`${this.calificacion}/10`);
    console.log("-------------------------");
  }

  // verificar si es recomendad (me muestra las peliculas que hayan sacado calificacion igual o mayor que 8)
}


class pelicula extends contenidoAudiovisual {
    genero: string;
    director: string;

    constructor(
        genero: string,
        director: string, 
        titulo: string,
        anio: number,
        duracion: number,
        calificacion: number,
    ) {
        super(titulo, anio, duracion, calificacion);
        this.genero = genero;
        this.director = director;
    }
    override mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Género: ${this.genero}`);
        console.log(`Director: ${this.director}`);

}
}

class documental extends contenidoAudiovisual {
    tema: string;
    narrador: string;

    constructor( 
        tema: string,
        narrador: string,
        titulo: string,
        anio: number,
        duracion: number,
        calificacion: number,
    ) {
        super(titulo, anio, duracion, calificacion);
        this.tema = tema;
        this.narrador = narrador;
    }
    
    override mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tema: ${this.tema}`);
        console.log(`Narrador: ${this.narrador}`);

}



}



 class catalogo {
    contenido: contenidoAudiovisual[]= [];

    agregar(contenido: contenidoAudiovisual): void {
        this.contenido.push(contenido);
    }

    eliminar(titulo: string): void {
        this.contenido = this.contenido.filter(
            (contenido) => contenido.titulo !== titulo,
        );
    }

    buscarPortitulo(titulo: string): contenidoAudiovisual | undefined {
        return this.contenido.find((contenido) => contenido.titulo === titulo);
    }

    mostrarTodos(): void {
        this.contenido.forEach((contenido) => contenido.mostrarInformacion());
    }

    mostrarRecomendados(): void {
        this.contenido
            .filter((contenido) => contenido.calificacion >= 8)
            .forEach((contenido) => contenido.mostrarInformacion());
    }


 }
 const documental1 = new documental("Naturaleza", "David Attenborough", "Planeta Tierra", 2006, 60, 9.5);
 documental1.mostrarInformacion();


 
