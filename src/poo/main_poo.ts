import { Hombre } from "./Hombre";
import { IPersona } from "./IPersona";
import { Mujer } from "./Mujer";

const hombre1: IPersona = new Hombre( 'Yhoan', 'Galeano' );
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();


const mujer: IPersona = new Mujer('Maria', 'Galeano');

