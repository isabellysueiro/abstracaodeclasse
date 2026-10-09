import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {
  getLimite(): number {
    return this.props.limite;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
      return;
    }

    if (valor > this.props.saldo + this.props.limite) {
      console.log("Saldo e limite insuficientes!");
      return;
    }

    this.props.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado!`);
  }

  exibirExtrato(): void {
    console.log("\n===== EXTRATO CONTA CORRENTE =====");
    console.log(`Titular: ${this.getTitular()}`);
    console.log(`Número: ${this.getNumero()}`);
    console.log(`Agência: ${this.getAgencia()}`);
    console.log(`Saldo: R$ ${this.getSaldo().toFixed(2)}`);
    console.log(`Limite: R$ ${this.getLimite().toFixed(2)}`);
    console.log("==================================");
  }
}