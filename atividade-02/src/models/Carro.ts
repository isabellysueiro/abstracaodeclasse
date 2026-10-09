import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/CarroProps.js";

export class Carro extends Veiculo<CarroProps> {

  constructor(props: CarroProps) {
    super(props);
  }

  getQtdPortas(): number {
    return this.props.qtdPortas;
  }

  setQtdPortas(novaQtd: number): void {
    this.props.qtdPortas = novaQtd;
  }

  exibirDados(): void {
    console.log("\n===== DADOS DO CARRO =====");
    console.log(`Placa: ${this.getPlaca()}`);
    console.log(`Modelo: ${this.getModelo()}`);
    console.log(`Marca: ${this.getMarca()}`);
    console.log(`Ano: ${this.getAno()}`);
    console.log(`Quantidade de portas: ${this.getQtdPortas()}`);
  }
}