import { Cuenta } from "./Cuenta";

export class Cuenta_Corriente extends Cuenta{
    private sobregiro: number

    constructor(saldo:number, tasa_anual:number){
        super(saldo,tasa_anual)
        this.sobregiro = 0
    }

    setSobregiro(){
        return this.sobregiro
    }

    getSobregiro(sobregiro: number){
        this.sobregiro = sobregiro
    }

    consignar(valor: number){
        if(this.sobregiro > 0){
            if(valor <= this.sobregiro){
                this.sobregiro -= valor
            }else{
                this.saldo += valor - this.sobregiro
                this.sobregiro = 0
            }
        }else{
            super.consignar(valor)
        }
    }

    retirar(valor: number){
        this.sobregiro += valor - this.saldo
        this.saldo = 0
    }

    extracto(){
        super.extracto()
    }

    imprimirDatosCorriente(){
        super.imprimir()
        console.log("Sobregiro: "+this.sobregiro)
    }
}
