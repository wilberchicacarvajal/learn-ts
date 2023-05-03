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
const lastName = 'galeano';

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

//Union types
let students: Array<stringOrNull> = ['Nico', 'wilber', null, 'Rayffer', null, 'Ana']; // la t se caracteriza de un tipo genérico 
console.log(students.filter((student) => student !== null));

//Tuplas
let exampleTuple: [string, null] = [ 'hola', null, ];

type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';
