import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PacienteSingleton {
  private static _instance:PacienteSingleton = new PacienteSingleton();

  private _sexo : String;
  private _comprimentoPerna : number;
  private _idade : number;
  private _etnia : String;
  private _alturaEstimada : number;
  private _pesoEstimado : number;
  private _imcPaciente : number;

  public static getInstance():PacienteSingleton{
    return PacienteSingleton._instance;
  }

  constructor(){
    if(PacienteSingleton._instance){
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

}
