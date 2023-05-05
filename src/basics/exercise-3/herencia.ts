class Animal {
   
    color!: string;
    especie!: string;
    peso!: string;
    tamanio!: string;

    constructor() {
        console.log('creando un animal');
    }

    alimentarse(): void {
        console.log('Alimentándome');
    }
}

// La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {
    constructor() {
        super();

        console.log('creando un gato a partir de un animal');

        private molestar() {
            
        }
        
    }
    
}

class Perro extends Animal {
    constructor() {
        super();

        console.log('creando un perro a partir de un animal'); 

        public jugando (){
            
        }
        
    }
    
}

const cualquierAnimal: Animal = new Animal();
cualquierAnimal.