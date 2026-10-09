import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {
  getTaxaAniversario(): number {
    return this.props.taxaAniversario;
  }

  renderJuros(): void {
    const rendimento =
      this.props.saldo * (this.props.taxaAniversario / 100);

    this.depositar(rendimento);

    console.log(
      `Rendimento aplicado: R$ ${rendimento.toFixed(2)}`
    );
  }

  exibirExtrato(): void {
    console.log("\n===== EXTRATO CONTA POUPANÇA =====");
    console.log(`Titular: ${this.getTitular()}`);
    console.log(`Número: ${this.getNumero()}`);
    console.log(`Agência: ${this.getAgencia()}`);
    console.log(`Saldo: R$ ${this.getSaldo().toFixed(2)}`);
    console.log(
      `Taxa de aniversário: ${this.getTaxaAniversario()}%`
    );
    console.log("==================================");
  }
}