import readlineSync from "readline-sync";

import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";
import { Veiculo } from "./src/models/Veiculo.js";


console.log("===== CADASTRO DE CARRO =====");

const placaCarro = readlineSync.question("Digite a placa do carro: ");
const modeloCarro = readlineSync.question("Digite o modelo do carro: ");
const marcaCarro = readlineSync.question("Digite a marca do carro: ");
const anoCarro = Number(readlineSync.question("Digite o ano do carro: "));
const portas = Number(
  readlineSync.question("Digite a quantidade de portas: ")
);

const carro = new Carro({
  placa: placaCarro,
  modelo: modeloCarro,
  marca: marcaCarro,
  ano: anoCarro,
  qtdPortas: portas
});


console.log("\n===== CADASTRO DE MOTO =====");

const placaMoto = readlineSync.question("Digite a placa da moto: ");
const modeloMoto = readlineSync.question("Digite o modelo da moto: ");
const marcaMoto = readlineSync.question("Digite a marca da moto: ");
const anoMoto = Number(readlineSync.question("Digite o ano da moto: "));
const cilindradas = Number(
  readlineSync.question("Digite as cilindradas da moto: ")
);

const moto = new Moto({
  placa: placaMoto,
  modelo: modeloMoto,
  marca: marcaMoto,
  ano: anoMoto,
  cilindradas: cilindradas
});

// Polimorfismo
const veiculos: Veiculo<any>[] = [carro, moto];

console.log("\n===== RELATÓRIO DOS VEÍCULOS =====");

for (const veiculo of veiculos) {
  veiculo.exibirDados();
}

console.log("\nCadastro finalizado!");