const teacher = {
    name: 'wilber',
    lastname: 'chica',
    age: 21
};

console.log('Teacher:', teacher);

// Primitivos
// Booleanos
// Declaración implícita
const isTeacher = true; // toma el valor con el cual fue declarado

let isPlayer = true;// toma el tipo del valor que el fue asignado
isPlayer = false;

// Declaración explicita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'tiene errores' : 'no tiene errores';

// String
const firstName = 'wilber';
const lastName = 'chica';

let fullName = `su nombre es: ${firstName} ${lastName}, bienvenido`;
console.log(fullName.toUpperCase());

// Number
let countStudent: number = 29;
let average: number = 4.5;

console.log(average.toFixed())

// Array 
let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;

// Union types
let students: Array<stringOrNull> = ['Nico', 'wilber', null, 'Rayffer', null, 'Ana']; // la t se caracteriza de un tipo genérico 
console.log(students.filter((student) => student !== null));

// Tuplas
let exampleTuple: [string, null] = [ 'hola', null, ];

// Tipos personalizados
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';

// Any
let working:  any = 25;
working = 'hola';      // la palabra any es muy mala practica

// Funciones
/**
 * funtion nombreFunción(parametro: tipoDato): tipoDatoQueRetornaLaFunción{}
 */
function validateValue( value: unknown ): boolean {

    // unknown que es un tipo de dato que es desconocido
    // para cualquier validación que deba hacer con el dato
    // debo primero saber o validar que tipo de datos es
    if (typeof(value) === 'string') {
        console.log(value.trim().toUpperCase());
    } else if (typeof value === 'number') {
        console.log(value.toFixed());
    }

    if ( value === ''){
        return false;
    }else {
        return true;
    }
}


function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// void
function processResponse( saved: boolean): void {

    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}

console.log( getFullName(firstName,lastName) );
processResponse( true );

enum Role{   //permite para crear diccionario sea de tipo numerico
    Admin,
    Client,
    Users,
    SuperAdmin 
}

let users:  Array< {name: string, role: Role } > = [
    {
        name: 'Pepito',
        role: Role.Admin
    },
    {
        name:'Juanito',
        role:Role.Client
        
    },
    {
        name:'Fulanito',
        role:Role.Client
        
    }
]

console.log( users.filter( (user) => user.role ===  Role.Client ) );