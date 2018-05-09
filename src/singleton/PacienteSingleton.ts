import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class PacienteSingleton {
  private static _instance: PacienteSingleton = new PacienteSingleton();

  constructor() {
    if (PacienteSingleton._instance) {
      throw new Error("Erro ao criar o PacienteSingleton");
    }
    PacienteSingleton._instance = this;
  }

  private _sexo: String;

  public get sexo(): String {
    return this._sexo;
  }

  public set sexo(value: String) {
    this._sexo = value;
  }

  private _comprimentoPerna: number;

  public get comprimentoPerna(): number {
    return this._comprimentoPerna;
  }

  public set comprimentoPerna(value: number) {
    this._comprimentoPerna = value;
  }

  private _circunferenciaBraco: number;

  public get circunferenciaBraco(): number {
    return this._circunferenciaBraco;
  }

  public set circunferenciaBraco(value: number) {
    this._circunferenciaBraco = value;
  }

  private _idade: number;

  public get idade(): number {
    return this._idade;
  }

  public set idade(value: number) {
    this._idade = value;
  }

  private _raca: String;

  public get raca(): String {
    return this._raca;
  }

  public set raca(value: String) {
    this._raca = value;
  }

  private _alturaEstimada: number;

  public get alturaEstimada(): number {
    return this._alturaEstimada;
  }

  public set alturaEstimada(value: number) {
    this._alturaEstimada = value;
  }

  private _pesoEstimado: number;

  public get pesoEstimado(): number {
    return this._pesoEstimado;
  }

  public set pesoEstimado(value: number) {
    this._pesoEstimado = value;
  }

  private _imcPaciente: number;

  public get imcPaciente(): number {
    return this._imcPaciente;
  }

  public set imcPaciente(value: number) {
    this._imcPaciente = value;
  }

  public static getInstance(): PacienteSingleton {
    return PacienteSingleton._instance;
  }

  public limparCampos() {
    this._sexo = "";
    this._comprimentoPerna = null;
    this._idade = null;
    this._raca = "";
    this._alturaEstimada = null;
    this._pesoEstimado = null;
    this._imcPaciente = null;
    this._circunferenciaBraco = null;
  }
  /* Mulheres brancas: Altura = 70,25 + (1,87 x altura de joelho) – (0,06 x idade)
Mulheres negras: Altura = 68,1+ (1,86 x altura de joelho) – (0,06 x idade)
Homens brancos: Altura = 71,85 + (1,88 x altura de joelho)
Homens negros: Altura = 73,42+ (1,79 x altura de joelho) */

  calcularAlturaEstimada() {
    if (this.sexo == "Masculino") {
      if (this.raca == "Branco"){
        this.alturaEstimada = 71.85 + (1.88 * this.comprimentoPerna);
      }
      else {
        this.alturaEstimada = 73.42 + (1.79 * this.comprimentoPerna);
      }
    } else {
      if (this.raca == "Branco"){
        this.alturaEstimada = 70.25 + (1.87 * this.comprimentoPerna) - (0.06 * this.idade);
      } else {
        this.alturaEstimada = 68.01 + (1.86 * this.comprimentoPerna) - (0.06 * this.idade);
      }
    }
    this.alturaEstimada = Math.round(this.alturaEstimada);
    this.alturaEstimada /= 100;
  }

  calcularPesoEstimado() {
    if (this.sexo == "Masculino") {
      if (this.raca == "Branco") {
        //Homem Branco
        this.pesoEstimado =
          (this.comprimentoPerna * 1.19) +
          (this.circunferenciaBraco * 3.21) -
          86.82;
      } else {
        //Homem Negro
        this.pesoEstimado =
          (this.comprimentoPerna * 1.09) +
          (this.circunferenciaBraco * 3.14) -
          83.72;
      }
    } else {
      if (this.raca == "Branco") {
        //Mulher Branca
        this.pesoEstimado =
          (this.comprimentoPerna * 1.01) +
          (this.circunferenciaBraco * 2.81) -
          66.04;
      } else {
        //Mulher Negra
        this.pesoEstimado =
          (this.comprimentoPerna * 1.24) +
          (this.circunferenciaBraco * 2.81) -
          82.48;
      }
    }
    this.pesoEstimado = Math.round(this.pesoEstimado);
  }

  calcularIMC() {
    this.imcPaciente =
      Math.round(
        this.pesoEstimado / (this.alturaEstimada * this.alturaEstimada) * 100
      ) / 100;
  }
}
