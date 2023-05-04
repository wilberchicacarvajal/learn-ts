class Auto {

    // Atributos de la clase o propiedades
    color: string = 'Negro'; // Inicializa directamente - Evitar realizar esto no es una buena practica
    puertas: number; // Inicializar en el constructor
    marca?: string; // Marca como opciones

    //Inicializar propiedades de la clase - Método que se ejecuta al realizar una instancia de la clase
    constructor(marca?: string) {
        this.puertas = 4; // con this, accedo a todas las propiedades y métodos de la clase
        this.marca = marca;
    }

    // Métodos de la clase
    acelerar() {
        console.log('Acelerado');
    }

    frenar() {
        console.log('Frenando');
    }

    prender() {
        console.log('Prendiendo');
    }
}

let ferrari: Auto = new Auto(); // Instancia de la clase Auto- Objeto
console.log(ferrari);
console.log(ferrari.marca);
ferrari.marca = 'ferrari';
console.log(ferrari.marca);
console.log(ferrari);
ferrari.color = 'blanco';
console.log(ferrari);

let lambo = new Auto('Lamborghini');
console.log(lambo);
lambo.puertas = 2;
lambo.color = 'Exotico'
console.log(lambo);

class Auto2 { 

    color: string = 'Negro';  // Implícita Por defecto es publico
    public puertas: number; // Forma explicita para colocar una propiedad publica

        // En el constructor yo puedo crear propiedades de la clase
        // sy y solo si tienen el modificador de acceso (public, private, protected)

        // Los parámetros que son opcionales, siempre deben ir al final de cualquier método o función 
        // en este  caso  el constructor es un método
        constructor( public peso: number, public marca?: string,  ) {
            this.puertas = 4;
            this.encender();
        }

    apagar() {
        console.log('Apagando');
    }

    private encender() {
        console.log(`Bienvenido ${this.marca}, tu color es: ${this.color}, tu peso es: ${this.peso} y tienes ${this.puertas} puertas.`);
    }


}

let ford = new Auto2(500, 'ford');
console.log(ford);
ford.apagar();
