import { Injectable } from "@angular/core";

@Injectable()
export class TabelaImcProvider {
  constructor(public faixaIMC: string, public estadoNutricional: string) {}
}
