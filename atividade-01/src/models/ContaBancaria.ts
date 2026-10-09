import { ContaProps } from "../interfaces/ContaProps.js";

export abstract class ContaBancaria<T extends ContaProps> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  getNumero(): string {
    return this.props.numero;
  }

  getAgencia(): string {
    return this.props.agencia;
  }

  getSaldo(): number {
    return this.props.saldo;
  }

  getTitular(): string {
    return this.props.titular;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
      return;
    }

    this.props.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
      return;
    }

    if (valor > this.props.saldo) {
      console.log("Saldo insuficiente!");
      return;
    }

    this.props.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado!`);
  }

  abstract exibirExtrato(): void;
}