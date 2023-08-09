import { Cuenta } from "./Cuenta";

export class Cuenta_Corriente extends Cuenta{
    private sobregiro: number

    constructor(saldo:number, tasa_anual){
        super(saldo,tasa_anual)
        this.sobregiro = 0
    }

    setSobregiro(){
        return this.sobregiro
    }

    getSobregiro(sobregiro: number){
        this.sobregiro = sobregiro
    }

    consignar(){
        
    }

    retirar(){
        
    }

    extracto(){
        
    }

    imprimirDatosCorriente(){
        
    }
}
