import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { AlertController } from "ionic-angular";

@Injectable()
export class PacienteSingleton {
  private static _instance: PacienteSingleton = new PacienteSingleton();

  private _sexo: String;
  private _comprimentoPerna: number;
  private _circunferenciaBraco: number;
  private _idade: number;
  private _etnia: String;
  private _alturaEstimada: number;
  private _pesoEstimado: number;
  private _imcPaciente: number;

  public get circunferenciaBraco(): number {
    return this._circunferenciaBraco;
  }

  public set circunferenciaBraco(value: number) {
    this._circunferenciaBraco = value;
  }

  public static getInstance(): PacienteSingleton {
    return PacienteSingleton._instance;
  }

  constructor() {
    if (PacienteSingleton._instance) {
      throw new Error("Erro ao criar o Singleton");
    }
    PacienteSingleton._instance = this;
  }

  public get sexo(): String {
    return this._sexo;
  }

  public set sexo(value: String) {
    this._sexo = value;
  }

  public get comprimentoPerna(): number {
    return this._comprimentoPerna;
  }

  public set comprimentoPerna(value: number) {
    this._comprimentoPerna = value;
  }

  public get idade(): number {
    return this._idade;
  }

  public set idade(value: number) {
    this._idade = value;
  }

  public get etnia(): String {
    return this._etnia;
  }

  public set etnia(value: String) {
    this._etnia = value;
  }

  public get alturaEstimada(): number {
    return this._alturaEstimada;
  }

  public set alturaEstimada(value: number) {
    this._alturaEstimada = value;
  }

  public get pesoEstimado(): number {
    return this._pesoEstimado;
  }

  public set pesoEstimado(value: number) {
    this._pesoEstimado = value;
  }

  public get imcPaciente(): number {
    return this._imcPaciente;
  }

  public set imcPaciente(value: number) {
    this._imcPaciente = value;
  }

  public limparCampos() {
    this._sexo = "";
    this._comprimentoPerna = null;
    this._idade = null;
    this._etnia = "";
    this._alturaEstimada = null;
    this._pesoEstimado = null;
    this._imcPaciente = null;
    this._circunferenciaBraco = null;
  }

  calcularAlturaEstimada() {
    if (this.sexo != null) {
      if (this.sexo == "Masculino") {
        this.alturaEstimada =
          2.02 * this.comprimentoPerna - 0.04 * this.idade + 64.19;
      } else {
        this.alturaEstimada =
          1.83 * this.comprimentoPerna - 0.24 * this.idade + 84.88;
      }
      this.alturaEstimada = Math.round(this.alturaEstimada);
      this.alturaEstimada /= 100;
    }
  }

  calcularPesoEstimado() {
    if (this.sexo != null && this.etnia != null) {
      if (this.sexo == "Masculino") {
        if (this.etnia == "Branco") {
          //Homem Branco
          this.pesoEstimado =
            this.comprimentoPerna * 1.19 +
            this.circunferenciaBraco * 3.21 -
            86.82;
        } else {
          //Homem Negro
          this.pesoEstimado =
            this.comprimentoPerna * 1.09 +
            this.circunferenciaBraco * 3.14 -
            83.72;
        }
      } else {
        if (this.etnia == "Branco") {
          //Mulher Branca
          this.pesoEstimado =
            this.comprimentoPerna * 1.01 +
            this.circunferenciaBraco * 2.81 -
            66.04;
        } else {
          //Mulher Negra
          this.pesoEstimado =
            this.comprimentoPerna * 1.24 +
            this.circunferenciaBraco * 2.81 -
            82.48;
        }
      }
      this.pesoEstimado = Math.round(this.pesoEstimado);
    }
  }

  calcularIMC() {
    if (this.pesoEstimado == null || this.alturaEstimada == null) {
      //TODO: Mensagem de Erro
    } else {
      this.imcPaciente =
        Math.round(
          this.pesoEstimado / (this.alturaEstimada * this.alturaEstimada) * 100
        ) / 100;
    }
  }
}
