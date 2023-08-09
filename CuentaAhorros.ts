import { Cuenta } from "./Cuenta";

export class Cuenta_Ahorros extends Cuenta{
    private estado: boolean

    constructor(saldo: number, tasa_anual: number){
        super(saldo,tasa_anual)
        this.estado = true
    }

    public setEstado(){
        return this.estado
    }

    public getEstado(estado: boolean){
        this.estado = estado
    }

    consignar(){

    }

    retirar(){
        
    }

    extractoMensual(){

    }

    imprimirDatos(){
        
    }
}