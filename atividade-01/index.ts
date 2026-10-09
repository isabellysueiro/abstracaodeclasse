import readlineSync from "readline-sync";

import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPupanca.js";
import { ContaBancaria } from "./src/models/ContaBancaria.js";

const contaCorrente = new ContaCorrente({
  numero: "001",
  agencia: "1234",
  titular: "João Silva",
  saldo: 1000,
  limite: 500,
});

const contaPoupanca = new ContaPoupanca({
  numero: "002",
  agencia: "1234",
  titular: "Maria Souza",
  saldo: 2000,
  taxaAniversario: 0.5,
});

// Exemplo de polimorfismo:
// as duas contas podem ser tratadas como ContaBancaria.
const contas: ContaBancaria<any>[] = [
  contaCorrente,
  contaPoupanca,
];

function menu(): void {
  let opcao: string;

  do {
    console.log("\n===== SISTEMA BANCÁRIO =====");
    console.log("1 - Exibir extrato da conta corrente");
    console.log("2 - Exibir extrato da conta poupança");
    console.log("3 - Depositar na conta corrente");
    console.log("4 - Sacar da conta corrente");
    console.log("5 - Depositar na conta poupança");
    console.log("6 - Sacar da conta poupança");
    console.log("7 - Aplicar rendimento na poupança");
    console.log("8 - Exibir todos os extratos (polimorfismo)");
    console.log("0 - Sair");

    opcao = readlineSync.question("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        contaCorrente.exibirExtrato();
        break;

      case "2":
        contaPoupanca.exibirExtrato();
        break;

      case "3": {
        const valor = readlineSync.questionFloat(
          "Valor do depósito: R$ "
        );
        contaCorrente.depositar(valor);
        break;
      }

      case "4": {
        const valor = readlineSync.questionFloat(
          "Valor do saque: R$ "
        );
        contaCorrente.sacar(valor);
        break;
      }

      case "5": {
        const valor = readlineSync.questionFloat(
          "Valor do depósito: R$ "
        );
        contaPoupanca.depositar(valor);
        break;
      }

      case "6": {
        const valor = readlineSync.questionFloat(
          "Valor do saque: R$ "
        );
        contaPoupanca.sacar(valor);
        break;
      }

      case "7":
        contaPoupanca.renderJuros();
        break;

      case "8":
        for (const conta of contas) {
          conta.exibirExtrato();
        }
        break;

      case "0":
        console.log("Sistema encerrado!");
        break;

      default:
        console.log("Opção inválida!");
    }
  } while (opcao !== "0");
}

menu();