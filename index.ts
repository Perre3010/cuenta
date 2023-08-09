import { Cuenta_Ahorros } from "./CuentaAhorros";
import { Cuenta_Corriente } from "./CuentaCorriente";

let cu_ahorro = new Cuenta_Ahorros(15000,2.2)
cu_ahorro.consignar(6000)
cu_ahorro.retirar(1500)
cu_ahorro.extractoMensual()
cu_ahorro.imprimirDatos()

let cu_corriente = new Cuenta_Corriente(8000, 1.2)
cu_corriente.consignar(5000)
cu_corriente.retirar(800)
cu_corriente.extracto()
cu_corriente.imprimir()


