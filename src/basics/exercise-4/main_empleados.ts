import { Empleado } from "./empleados";
import { EmpleadoPorHora } from "./empleado_horas";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { TipoEmpleado } from './tipo_empleado.enum';

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'wilber chica',
    123,
    150000
);
empleadoTiempoCompleto.mostrarInformacion();
console.log(`salario: ${empleadoTiempoCompleto.calcularSalario()}`)

// cast
console.log(
 'cast 1', (empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual
);

console.log(
    'cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual
);

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto) {
    console.log(empleadoTiempoCompleto.calcularSalario);
}

console.log("=================================================")

const empleadoPorHora = new EmpleadoPorHora (
    'juanita perez',
    456,
    TipoEmpleado.POR_HORA,
    200000,
    5
);
empleadoPorHora.mostrarInformacion();
console.log(`salario: ${empleadoPorHora.calcularSalario()}`)
console.log( empleadoPorHora.horasTrabajadas);
console.log( empleadoPorHora.tariFaPorHora);

const empleados = [empleadoTiempoCompleto, empleadoPorHora];