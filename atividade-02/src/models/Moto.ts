import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/MotoProps.js";

export class Moto extends Veiculo<MotoProps> {

  constructor(props: MotoProps) {
    super(props);
  }

  getCilindradas(): number {
    return this.props.cilindradas;
  }

  setCilindradas(novaCil: number): void {
    this.props.cilindradas = novaCil;
  }

  exibirDados(): void {
    console.log("\n===== DADOS DA MOTO =====");
    console.log(`Placa: ${this.getPlaca()}`);
    console.log(`Modelo: ${this.getModelo()}`);
    console.log(`Marca: ${this.getMarca()}`);
    console.log(`Ano: ${this.getAno()}`);
    console.log(`Cilindradas: ${this.getCilindradas()} cc`);
  }
}