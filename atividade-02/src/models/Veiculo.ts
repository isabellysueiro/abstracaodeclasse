import { VeiculoProps } from "../interfaces/VeiculoProps.js";

export abstract class Veiculo<T extends VeiculoProps> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  getPlaca(): string {
    return this.props.placa;
  }

  getModelo(): string {
    return this.props.modelo;
  }

  getMarca(): string {
    return this.props.marca;
  }

  getAno(): number {
    return this.props.ano;
  }

  setPlaca(novaPlaca: string): void {
    this.props.placa = novaPlaca;
  }

  setModelo(novoModelo: string): void {
    this.props.modelo = novoModelo;
  }

  setMarca(novaMarca: string): void {
    this.props.marca = novaMarca;
  }

  setAno(novoAno: number): void {
    this.props.ano = novoAno;
  }

  abstract exibirDados(): void;
}