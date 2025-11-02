//Clase Bancaria
class CuentaBancaria {
    constructor ( titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar (monto) {
        this.saldo += monto;
        return "Saldo: "+ this.saldo;
    }

    retirar (monto) {
        if (monto > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo -= monto;
        return "Saldo: "+ this.saldo;
    }
}

//Ejecutar 
const cuenta = new CuentaBancaria ("Ana", 10000);

console.log(cuenta.depositar(500));   
console.log(cuenta.retirar(2000));    
console.log(cuenta.depositar(1));     
console.log(cuenta.retirar(30000)); 