import { Cuenta } from "./Cuenta";

export class Cuenta_Ahorros extends Cuenta{
    private estado: boolean

    constructor(saldo: number, tasa_anual: number){
        super(saldo,tasa_anual)
        this.estado = saldo >= 10000
    }

    public setEstado(){
        return this.estado
    }

    public getEstado(estado: boolean){
        this.estado = estado
    }

    consignar(valor: number){
        if(this.estado){
            super.consignar(valor)
        }else{
            console.log("No se puede consignar. Cuenta inactiva")
        }
    }

    retirar(valor: number){
        if (this.estado) {
            super.retirar(valor);
          } else {
            console.error("No se puede retirar de una cuenta inactiva.");
          }
    }

    extractoMensual(){
        if (this.num_retiros > 2) {
            this.comision_anual += 500;
          }
          super.extracto();
    }

    imprimirDatos(){
        super.imprimir()
        console.log("Cuenta activa: "+this.estado)
    }
}