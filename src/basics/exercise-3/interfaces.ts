// Interface: me sirve para generar la estructura de un objeto o definir un contrato para una clase.

enum Rol {
    Junior,
    Middle,
    Senior
}

enum TipoContrato {
    Indefinido,
    TerminoFijo,
    PrestaciónServicios
}

// Definir un contrato para una clase.
interface IContrato {

    // Propiedades opcionales - No es obligatorio que quien implementen escriba estas propiedades
    salario?: number;
    fechaInicio?: Date;

    // Propiedades obligatorias - Deben escribir en la implementación
    rol?: Rol;

    // Solo se crea la firma de los métodos, quien implemente debe definir
    // su funcionalidad
    // Métodos opcionales
    cancelar?(): void;

    // Métodos obligatorios
    pagar(): number;
    suspender(cantidad: number): void;
}

class contratoUltraCredit implements IContrato {

    // Atributos que debo tener en la interface ContratoJunior
    rol?: Rol;
    salario?: number

    // Atributo propios
    TipoContrato: TipoContrato;

    constructor() {
        this.TipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} días.`);
        console.log('Información del Contrato')
        // ?? Nullish Coalescing operator - Valida que la expresión de la izquierda sea diferente
        //de null o undefined. Si es un null  o undefined devolverá la expresión de la derecha,
        // de lo contrario retorna el valor de la expresión de la izquierda
        console.log(`Tu salario es: ${this.salario ?? 1000}`);
        // Validando null, undefined, 0, false, '', NaN - NaN  
        console.log(`Tu salario es: ${this.salario ? this.salario : 1000}`);
    }

}

class ContratoGlobal implements IContrato {
    salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    constructor() {
        this.rol = Rol.Middle;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido por: ${cantidad} meses`);
    }

    cancelar?(): void {
        console.log('contrato cancelado');
    }
    pagar(): number {
        return 2000000;
    }
}

// son dos objetos de diferentes clases  (implementaciones) pero de la misma interface
// Polimorfismo por interface
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new contratoUltraCredit();

const listaContratos = [contratoJuan, contratoJuana];

listaContratos.forEach((contrato: IContrato) => {
    console.log('===================');
    contrato.suspender(3);
    console.log(typeof contrato);

    if (contrato instanceof contratoUltraCredit) {
        console.log(contrato.TipoContrato);
    } else if (contrato instanceof ContratoGlobal) {
        contrato.cancelar!();
    }
    console.log('===================');
});