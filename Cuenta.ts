export class Cuenta{
    protected saldo: number
    protected num_consig: number 
    protected num_retiros: number 
    protected tasa_anual: number
    protected comision_anual: number 

    constructor(saldo: number, tasa_anual: number){
        this.saldo = saldo 
        this.num_consig = 0
        this.num_retiros = 0
        this.saldo = saldo
        this.tasa_anual = tasa_anual
        this.comision_anual = 0
    }

    public getSaldo(){
        return this.saldo
    }

    public setSaldo(saldo:number){
        this.saldo = saldo
    }

    public getNum_consig(){
        return this.num_consig
    }

    public setNum_consig(num_consig: number){
        this.num_consig = num_consig
    }

    public getNum_retiros(){
        return this.num_retiros
    }

    public setNum_retiros(num_retiros: number){
        this.num_retiros = num_retiros
    } 

    public getTasa_anual(){
        return this.tasa_anual
    }

    public setTasa_anual(tasa_anual: number){
        this.tasa_anual = tasa_anual
    }

    public getComision_anual(){
        return this.comision_anual
    }

    public setComision_anual(comision_anual:number){
        this.comision_anual = comision_anual
    }

    consignar(valor: number){
        if(valor > 0){
            this.saldo+=valor
            this.num_consig++
        }else{
            console.log("El valor de consignacion debe ser mayor a cero")
        }
    }

    retirar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            this.num_retiros++
        }else{
            console.log("Valor insuficiente")
        }
    }

    calcular(){
    const im = (this.saldo * this.tasa_anual)/12/100
    this.saldo += im
    }

    extracto(){
        this.saldo -= this.comision_anual
        this.calcular()
        console.log("Extracto mensual:")
        this.imprimir()
    }

    imprimir(){
        console.log("Saldo: "+this.saldo)
        console.log("Comision mensual: "+this.comision_anual)
        console.log("Numero de consignaciones: "+this.num_consig)
        console.log("Numero de retiros: "+this.num_retiros)
    }

}